"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  maxLength?: number;
  options?: { value: string; label: string }[];
}

const FormField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  maxLength,
  options,
}: FormFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
    if (window.navigator.vibrate) {
      window.navigator.vibrate(25);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isFilled = value.length > 0;

  const renderInput = () => {
    if (type === 'select' && options) {
      return (
        <select
          ref={inputRef as React.RefObject<HTMLSelectElement>}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          className="w-full bg-transparent outline-none text-lg"
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (type === 'textarea') {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          maxLength={maxLength}
          className="w-full bg-transparent outline-none text-lg resize-none"
          rows={3}
        />
      );
    }

    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        maxLength={maxLength}
        className="w-full bg-transparent outline-none text-lg"
      />
    );
  };

  return (
    <div className="relative">
      <motion.label
        className="absolute left-0 pointer-events-none text-gray-500"
        animate={{
          y: isFocused || isFilled ? -20 : 0,
          scale: isFocused || isFilled ? 0.8 : 1,
          color: isFocused ? '#3B82F6' : '#6B7280',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {label}
      </motion.label>
      <div className="relative">
        {renderInput()}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200"
          animate={{
            backgroundColor: isFocused ? '#3B82F6' : '#E5E7EB',
            height: isFocused ? '2px' : '1px',
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
      {maxLength && (
        <motion.div
          className="absolute right-0 top-1 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: isFocused ? 1 : 0 }}
        >
          {value.length}/{maxLength}
        </motion.div>
      )}
    </div>
  );
};

interface MobileFormProps {
  onSubmit: (data: any) => void;
  fields: FormFieldProps[];
}

const MobileForm = ({ onSubmit, fields }: MobileFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {fields.map((field) => (
        <FormField
          key={field.name}
          {...field}
          value={formData[field.name] || ''}
          onChange={(value) => handleFieldChange(field.name, value)}
        />
      ))}
      <motion.button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium"
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
      >
        Submit
      </motion.button>
    </motion.form>
  );
};

export default MobileForm; 