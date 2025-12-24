'use client';

import { useState } from 'react';
import { CheckCircle, Package, MapPin, CreditCard, Calendar, User, Mail, Phone, Globe } from 'lucide-react';

const translations = {
  en: {
    title: 'LuxVeda Hub',
    subtitle: 'Premium Ayurvedic & Wellness Products',
    orderConfirmed: 'Order Confirmed!',
    thankYou: 'Thank you for your order',
    orderNumber: 'Order Number',
    orderDate: 'Order Date',
    estimatedDelivery: 'Estimated Delivery',
    orderSummary: 'Order Summary',
    shippingAddress: 'Shipping Address',
    paymentMethod: 'Payment Method',
    item: 'Item',
    quantity: 'Quantity',
    price: 'Price',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    tax: 'Tax',
    total: 'Total',
    trackOrder: 'Track Your Order',
    continueShopping: 'Continue Shopping',
    customerDetails: 'Customer Details',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
  },
  hi: {
    title: 'लक्सवेदा हब',
    subtitle: 'प्रीमियम आयुर्वेदिक और वेलनेस उत्पाद',
    orderConfirmed: 'ऑर्डर की पुष्टि हो गई!',
    thankYou: 'आपके ऑर्डर के लिए धन्यवाद',
    orderNumber: 'ऑर्डर संख्या',
    orderDate: 'ऑर्डर की तारीख',
    estimatedDelivery: 'अनुमानित डिलीवरी',
    orderSummary: 'ऑर्डर सारांश',
    shippingAddress: 'डिलीवरी का पता',
    paymentMethod: 'भुगतान विधि',
    item: 'वस्तु',
    quantity: 'मात्रा',
    price: 'मूल्य',
    subtotal: 'उप-योग',
    shipping: 'शिपिंग',
    tax: 'कर',
    total: 'कुल',
    trackOrder: 'अपना ऑर्डर ट्रैक करें',
    continueShopping: 'खरीदारी जारी रखें',
    customerDetails: 'ग्राहक विवरण',
    name: 'नाम',
    email: 'ईमेल',
    phone: 'फोन',
  },
};

const sampleOrder = {
  orderNumber: 'LVH-2024-78945',
  orderDate: '24 December 2024',
  estimatedDelivery: '28-30 December 2024',
  customer: {
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
  },
  items: [
    {
      id: 1,
      name: {
        en: 'Ashwagandha Premium Capsules',
        hi: 'अश्वगंधा प्रीमियम कैप्सूल',
      },
      quantity: 2,
      price: 899,
    },
    {
      id: 2,
      name: {
        en: 'Turmeric & Ginger Immunity Booster',
        hi: 'हल्दी और अदरक इम्यूनिटी बूस्टर',
      },
      quantity: 1,
      price: 649,
    },
    {
      id: 3,
      name: {
        en: 'Ayurvedic Hair Oil (200ml)',
        hi: 'आयुर्वेदिक हेयर ऑयल (200ml)',
      },
      quantity: 1,
      price: 549,
    },
  ],
  address: {
    en: '123 Green Park, New Delhi, Delhi - 110016, India',
    hi: '123 ग्रीन पार्क, नई दिल्ली, दिल्ली - 110016, भारत',
  },
  paymentMethod: {
    en: 'UPI Payment',
    hi: 'UPI भुगतान',
  },
  subtotal: 2996,
  shipping: 99,
  tax: 539,
};

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const t = translations[language];

  const total = sampleOrder.subtotal + sampleOrder.shipping + sampleOrder.tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-primary-700">{t.title}</h1>
              <p className="text-sm text-gray-600">{t.subtitle}</p>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Globe size={20} />
              {language === 'en' ? 'हिंदी' : 'English'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-green-500">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="text-green-500" size={64} />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            {t.orderConfirmed}
          </h2>
          <p className="text-center text-gray-600 text-lg">{t.thankYou}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="text-primary-600" size={24} />
                  <p className="text-sm text-gray-600">{t.orderNumber}</p>
                </div>
                <p className="text-xl font-bold text-gray-800">{sampleOrder.orderNumber}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-primary-600" size={24} />
                  <p className="text-sm text-gray-600">{t.orderDate}</p>
                </div>
                <p className="text-xl font-bold text-gray-800">{sampleOrder.orderDate}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="text-primary-600" size={24} />
                  <p className="text-sm text-gray-600">{t.estimatedDelivery}</p>
                </div>
                <p className="text-lg font-bold text-gray-800">{sampleOrder.estimatedDelivery}</p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.orderSummary}</h3>
              <div className="space-y-4">
                {sampleOrder.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{item.name[language]}</p>
                      <p className="text-sm text-gray-600">
                        {t.quantity}: {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold text-gray-800">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>{t.subtotal}</span>
                  <span>₹{sampleOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{t.shipping}</span>
                  <span>₹{sampleOrder.shipping}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{t.tax}</span>
                  <span>₹{sampleOrder.tax}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-800 pt-4 border-t-2 border-gray-300">
                  <span>{t.total}</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Customer & Shipping Info */}
          <div className="space-y-6">
            {/* Customer Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.customerDetails}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <User className="text-primary-600 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">{t.name}</p>
                    <p className="font-semibold text-gray-800">{sampleOrder.customer.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-primary-600 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">{t.email}</p>
                    <p className="font-semibold text-gray-800">{sampleOrder.customer.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary-600 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">{t.phone}</p>
                    <p className="font-semibold text-gray-800">{sampleOrder.customer.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">{t.shippingAddress}</h3>
              </div>
              <p className="text-gray-700">{sampleOrder.address[language]}</p>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="text-primary-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">{t.paymentMethod}</h3>
              </div>
              <p className="text-gray-700">{sampleOrder.paymentMethod[language]}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md">
                {t.trackOrder}
              </button>
              <button className="w-full bg-white text-primary-600 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors">
                {t.continueShopping}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-6 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 LuxVeda Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
