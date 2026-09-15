import React, { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ContactFormProps {
  formspreeId?: string;
  variant?: 'default' | 'minimal';
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formspreeId,
  variant = 'default',
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const isMinimal = variant === 'minimal';
  const inputClassName = isMinimal
    ? 'mt-2 block min-h-14 w-full border border-[#d8d0c8] bg-white px-4 text-base text-[#082f4f] outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary'
    : 'mt-2 block min-h-12 w-full border-0 bg-white px-4 text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary';

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="mt-10 border border-emerald-200 bg-emerald-50 p-6 text-center" role="status">
        <h3 className="text-lg font-semibold text-emerald-900">需求已提交</h3>
        <p className="mt-2 text-emerald-700">感谢您的信任，我们会尽快与您联系。</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 min-h-11 text-sm font-semibold text-emerald-700 hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        >
          再次提交
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={isMinimal ? 'm-0' : 'mt-10'}>
      <div className={isMinimal ? 'grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2' : 'grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2'}>
        <div>
          <label
            htmlFor="name"
            className={isMinimal ? 'block text-sm font-semibold leading-6 text-[#082f4f]' : 'block text-base font-semibold leading-7 text-gray-900'}
          >
            姓名
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
            placeholder="请输入姓名"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className={isMinimal ? 'block text-sm font-semibold leading-6 text-[#082f4f]' : 'block text-base font-semibold leading-7 text-gray-900'}
          >
            邮箱
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="请输入常用邮箱"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className={isMinimal ? 'block text-sm font-semibold leading-6 text-[#082f4f]' : 'block text-base font-semibold leading-7 text-gray-900'}
          >
            联系电话
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
            placeholder="请输入联系电话"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className={isMinimal ? 'block text-sm font-semibold leading-6 text-[#082f4f]' : 'block text-base font-semibold leading-7 text-gray-900'}
          >
            企业名称
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
            required
            placeholder="请输入企业名称"
            className={inputClassName}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className={isMinimal ? 'block text-sm font-semibold leading-6 text-[#082f4f]' : 'block text-base font-semibold leading-7 text-gray-900'}
          >
            需求说明
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="请简要描述岗位规模、服务城市和到岗时间"
            className={
              isMinimal
                ? 'mt-2 block min-h-32 w-full resize-y border border-[#d8d0c8] bg-white px-4 py-3 text-base text-[#082f4f] outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary'
                : 'mt-2 block w-full border-0 bg-white px-4 py-3 text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary'
            }
          />
        </div>
      </div>
      {status === 'error' && (
        <div className="mt-4 border border-red-200 bg-red-50 p-4" role="alert">
          <p className="text-base text-red-700">
            提交失败，请稍后重试。
          </p>
        </div>
      )}
      <div className={isMinimal ? 'mt-4' : 'mt-10'}>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={
            isMinimal
              ? 'flex min-h-16 w-full items-center justify-center bg-primary px-6 text-base font-semibold text-white transition-colors hover:bg-[#af3c34] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 sm:px-7'
              : 'block min-h-12 w-full bg-primary px-5 text-center text-base font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50'
          }
        >
          {status === 'submitting' ? '提交中…' : '提交'}
        </button>
      </div>
    </form>
  );
};
