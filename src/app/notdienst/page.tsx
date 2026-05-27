import { PhoneCall, Clock, MapPin, WarningCircle } from '@phosphor-icons/react/dist/ssr';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: '24h Notdienst Sanitär & Heizung Wetzlar',
  description: 'Rohrbruch, Heizungsausfall oder verstopfter Abfluss? Unser 24h Notdienst ist rund um die Uhr für Sie da. Jetzt anrufen!',
  path: '/notdienst',
});

export default function NotdienstPage() {
  return (
    <main>
      <section className="bg-red-600 py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-8">
            <WarningCircle size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            24h Sanitär & Heizung Notdienst
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-12">
            Rohrbruch? Heizungsausfall? Verstopfter Abfluss? <br />
            Wir sind rund um die Uhr für Sie in Wetzlar und Umgebung im Einsatz!
          </p>
          
          <a 
            href="tel:+49123456789" 
            className="inline-flex items-center justify-center gap-4 bg-white text-red-600 hover:bg-neutral-100 font-black text-2xl md:text-3xl px-8 py-6 rounded-xl shadow-2xl transition-transform hover:scale-105"
          >
            <PhoneCall size={36} weight="fill" />
            0123 / 456 789
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-xl text-center border border-neutral-100">
              <Clock size={40} className="mx-auto text-red-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">24/7 Erreichbarkeit</h3>
              <p className="text-neutral-600">Wir sind 365 Tage im Jahr, auch an Wochenenden und Feiertagen, für Sie erreichbar.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl text-center border border-neutral-100">
              <MapPin size={40} className="mx-auto text-red-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">Schnell vor Ort</h3>
              <p className="text-neutral-600">Im Raum Wetzlar und im Umkreis von 30km sind wir meist innerhalb kürzester Zeit bei Ihnen.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl text-center border border-neutral-100">
              <Wrench size={40} className="mx-auto text-red-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">Fachgerechte Reparatur</h3>
              <p className="text-neutral-600">Unsere Meister und geschulten Monteure beheben Schäden professionell und nachhaltig.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Ensure we have Wrench locally if not imported at top
import { Wrench } from '@phosphor-icons/react/dist/ssr';
