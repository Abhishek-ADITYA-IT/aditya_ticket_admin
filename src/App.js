import logo from './logo.svg';
import './App.css';

function App() {
  let ticket = {
    "ticketid": "23837347",
    "created": "2023-12-09 12:45 PM",
    "updated": "2023-12-09 01:23 PM",
    "description": "SEMESTER CHANGE II BBA-DM(IV SEM) Can You Help ME",
    "from": "Veda Murthy",
    "priority": "Normal",
    "assigned": "Analysis Support"
  }
  let tickets = [ticket, ticket, ticket, ticket, ticket, ticket, ticket, ticket, ticket, ticket]
  return (
    <div id='main'>
      <div id='tickets-category'></div>
      <div id='tickets-table'>
        {
          tickets.map((ticket, index) => {
            return (
              <div>
                <div className='ticket-card'>
                  <input type={"checkbox"} className='ticket-box'></input>

                  <h4 className='ticket id'>#{ticket['ticketid']}</h4>

                  <h4 className='ticket date'>{ticket['updated']}</h4>

                  <h4 className='ticket subject'>{ticket['description']}</h4>

                  <h4 className='ticket from'>{ticket['from']}</h4>

                  <h4 className='ticket priority'>{ticket['priority']}</h4>

                  <h4 className='ticket assigned'>{ticket['assigned']}</h4>
                </div>
                <div className='ticket-border'></div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
