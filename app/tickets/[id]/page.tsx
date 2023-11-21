import { notFound } from "next/navigation";

export const dynamicParams = true; // default val = true

interface Ticket {
  id: number;
  title: string;
  user_email: string;
  body: string;
  priority: string;
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');

  const tickets = await res.json();

  return tickets.map((ticket: Ticket) => ({
    id: ticket.id.toString(),
  }));
}

async function getTicket(id: string) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

interface TicketDetailsProps {
  params: { id: string };
}

const TicketDetails: React.FC<TicketDetailsProps> = async ({ params }) => {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
