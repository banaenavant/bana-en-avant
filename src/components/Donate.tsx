import { useEffect, useRef } from 'react';
import { Heart, Shield, TrendingUp } from 'lucide-react';

export default function Donate() {
  const rendered = useRef(false);

  useEffect(() => {
    const containerId = 'paypal-container-H72ZJKZ3UA9RN';
    const scriptId = 'paypal-hosted-sdk';

    const tryRender = () => {
      if (rendered.current) return;
      const container = document.getElementById(containerId);
      if (!container || container.hasChildNodes()) return;
      rendered.current = true;
      (window as any).paypal.HostedButtons({
        hostedButtonId: 'H72ZJKZ3UA9RN',
      }).render(`#${containerId}`);
    };

    if (document.getElementById(scriptId)) {
      if ((window as any).paypal) tryRender();
    } else {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.paypal.com/sdk/js?client-id=BAAUKKUW_86AQCoXoSTf9osjvM6q-2JQ8qw3_75da5R9lLgHI_sEKp0F-2OtcHaAInh4xZSkUpiXxBdgwk&components=hosted-buttons&disable-funding=venmo&currency=EUR';
      script.async = true;
      script.onload = tryRender;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="donate" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12 reveal">
            <span className="inline-block text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4">
              Soutenez nos actions
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
              Je fais un don
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-orange-400 mx-auto mb-6 rounded-full" />
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

            {/* Top accent */}
            <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-orange-400" />

            <div className="p-10 md:p-14">

              {/* PayPal Hosted Button */}
              <div id="paypal-container-H72ZJKZ3UA9RN" className="w-full min-h-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
