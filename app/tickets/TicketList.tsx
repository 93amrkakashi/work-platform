import Link from "next/link";
import { NextPage } from "next";

interface Ticket {
  id: number;
  title: string;
  body: string;
  priority: string;
}

async function getTickets(): Promise<Ticket[]> {
  const res = await fetch("http://localhost:4000/tickets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

const TicketList: NextPage<{ tickets: Ticket[] }> = ({ tickets }) => {
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <a>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </a>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
};

TicketList.getInitialProps = async () => {
  const tickets = await getTickets();
  return { tickets };
};

export default TicketList;
