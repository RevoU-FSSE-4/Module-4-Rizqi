import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const validationSchema = Yup.object().shape({
    step1: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      dob: Yup.date().required('Date of Birth is required').nullable(),
    }),
    step2: Yup.object({
      street: Yup.string().required('Street Address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      zip: Yup.string().matches(/^\d{5}$/, 'Invalid Zip Code format').required('Zip Code is required'),
    }),
    step3: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
        .required('Password is required'),
    }),
  });

  const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      step1: { fullName: '', email: '', dob: '' },
      step2: { street: '', city: '', state: '', zip: '' },
      step3: { username: '', password: '' },
    },
  });

  const onSubmit = data => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Form Data:', data);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 1: Personal Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                {...register('step1.fullName')}
                className={`w-full p-2 border ${errors.step1?.fullName ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.step1?.fullName && <p className="text-red-500 text-sm mt-1">{errors.step1.fullName.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                {...register('step1.email')}
                className={`w-full p-2 border ${errors.step1?.email ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.step1?.email && <p className="text-red-500 text-sm mt-1">{errors.step1.email.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                {...register('step1.dob')}
                className={`w-full p-2 border ${errors.step1?.dob ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.step1?.dob && <p className="text-red-500 text-sm mt-1">{errors.step1.dob.message}</p>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 2: Address Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Street Address</label>
              <input
                type="text"
                {...register('step2.street')}
                className={`w-full p-2 border ${errors.step2?.street ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.step2?.street && <p className="text-red-500 text-sm mt-1">{errors.step2.street.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                {...register('step2.city')}
                className={`w-full p-2 border ${errors.step2?.city ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.step2?.city && <p className="text-red-500 text-sm mt-1">{errors.step2.city.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                {...register('step2.state')}
                className={`w-full p-2 border ${errors.step2?.state ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.step2?.state && <p className="text-red-500 text-sm mt-1">{errors.step2.state.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Zip Code</label>
              <input
                type="text"
                {...register('step2.zip')}
                className={`w-full p-2 border ${errors.step2?.zip ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.step2?.zip && <p className="text-red-500 text-sm mt-1">{errors.step2.zip.message}</p>}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 3: Account Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                {...register('step3.username')}
                className={`w-full p-2 border ${errors.step3?.username ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.step3?.username && <p className="text-red-500 text-sm mt-1">{errors.step3.username.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                {...register('step3.password')}
                className={`w-full p-2 border ${errors.step3?.password ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.step3?.password && <p className="text-red-500 text-sm mt-1">{errors.step3.password.message}</p>}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            {step < 3 ? 'Next' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
