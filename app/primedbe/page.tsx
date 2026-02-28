'use client';

import { useState } from 'react';
import { CONTACT_INFO } from '@/lib/constants';

export default function PrimedbeIpitanjaPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'primedba',
    subject: '',
    message: '',
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', subject: '', message: '', privacy: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Ime je obavezno';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email je obavezan';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email nije validan';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Предмет је обавезан';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Порука је обавезна';
      isValid = false;
    }

    if (!privacyAccepted) {
      newErrors.privacy = 'Морате прихватити политику приватности';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
        `[${formData.type === 'primedba' ? 'Примедба' : 'Питање'}] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Ime i prezime: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone || 'nije navedeno'}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
    }
  };

  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-4">
          Примедбе и питања грађана
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Српски покрет Монархиста је отворен за сва питања и примедбе грађана.
          Ваш глас је важан за нас. Попуните формулар испод и ми ћемо одговорити
          у најкраћем могућем року.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Хвала вам!</h2>
                <p className="text-gray-600">
                  Ваша {formData.type === 'primedba' ? 'примедба' : 'питање'} је послата.
                  Потрудићемо се да одговоримо у најкраћем могућем року.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Врста обраћања
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value="primedba"
                        checked={formData.type === 'primedba'}
                        onChange={handleChange}
                        className="text-royal-blue focus:ring-royal-gold"
                      />
                      <span className="text-gray-700">Примедба</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value="pitanje"
                        checked={formData.type === 'pitanje'}
                        onChange={handleChange}
                        className="text-royal-blue focus:ring-royal-gold"
                      />
                      <span className="text-gray-700">Питање</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Ваше пуно име"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email адреса *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="vas.email@primer.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Број телефона (необавезно)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent"
                    placeholder="+381 60 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Предмет *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Кратак опис примедбе или питања"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Текст примедбе/питања *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Детаљно опишите своју примедбу или питање..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyAccepted}
                      onChange={(e) => {
                        setPrivacyAccepted(e.target.checked);
                        if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: '' }));
                      }}
                      className="mt-1 h-4 w-4 text-royal-blue focus:ring-royal-gold border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                      Прихватам{' '}
                      <a href="/politika-privatnosti" target="_blank" rel="noopener noreferrer"
                        className="text-royal-blue hover:text-royal-gold underline">
                        политику приватности
                      </a>{' '}
                      и сагласан/на сам са обрадом личних података
                    </label>
                  </div>
                  {errors.privacy && <p className="mt-1 text-sm text-red-500">{errors.privacy}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-royal-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-royal-gold transition-colors focus:ring-4 focus:ring-royal-gold/50"
                >
                  Пошаљи {formData.type === 'primedba' ? 'примедбу' : 'питање'}
                </button>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-royal-gold rounded-full block"></span>
                Контакт
              </h2>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-royal-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-royal-blue hover:text-royal-gold transition-colors break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-royal-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{CONTACT_INFO.phone}</span>
                </div>
              </div>
            </div>

            <div className="bg-royal-blue text-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-semibold mb-3">Ваш глас је важан</h2>
              <p className="text-sm text-blue-100 leading-relaxed">
                Српски покрет Монархиста активно ради на решавању проблема грађана.
                Ваше примедбе и питања помажу нам да боље разумемо потребе заједнице
                и да се борбено заложимо за ваша права.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-royal-gold">
              <p className="text-sm text-gray-600 italic">
                &ldquo;Пољопривредници неће остати сами — борићемо се да заједно са
                њима остваримо њихове циљеве.&rdquo;
              </p>
              <p className="text-sm font-semibold text-royal-blue mt-2">
                — Инфо служба СПМ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
