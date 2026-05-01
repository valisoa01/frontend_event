import { GetServerSideProps } from 'next';
import { Event } from '@/types';
import EventList from '@/components/events/EventList';
import { eventService } from '@/services/event.service';

interface HomeProps {
  events: Event[];
}

export default function Home({ events }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur EventSync
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez et participez aux événements en temps réel
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Événements à venir
          </h2>
          <EventList events={events} />
        </section>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // TODO: Remplacer par l'appel API réel
    const events = await eventService.getAll();
    return {
      props: {
        events: events.data || [],
      },
    };
  } catch (error) {
    console.error('Erreur lors du chargement des événements:', error);
    return {
      props: {
        events: [],
      },
    };
  }
};