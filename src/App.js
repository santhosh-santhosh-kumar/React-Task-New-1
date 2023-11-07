//import logo from './logo.svg';
import './App.css';
import Price from './Price';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const priceCard=[
    {
        plan:'free',
        month:0,
        feature:[
        {
          name:'single user'
        },
        {
          name:'50GB Storage'
        },
        {
          name:'Unlimited Public Projects'
        },
        {
          name:'Community Access'
        },      
        {
          name:'Unlimited Private Projects',
          mute:true,
          check:true
        },
        {
          name:'Dedicated Phone Support',
          mute:true,
          check:true
        },
        {
          name:'Free Subdomain',
          mute:true,
          check:true
        },
        {
          name:'Monthly Status Reports',
          mute:true,
          check:true
        }
        ]
    },
    {
      plan:'plus',
      month:9,

      feature:[
        
        {
          name:'5 Users'
        },
        {
          name:'50GB Storage'
        },
        {
          name:'Unlimited Public Projects'
        },
        {
          name:'Community Access'
        },      
        {
          name:'Unlimited Private Projects'
        },
        {
          name:'Dedicated Phone Support'
        },
        {
          name:'Free Subdomain'
        },
        {
          name:'Monthly Status Reports',
          mute:true,
          check:true
        }
        ]
    },
    {
      plan:'pro',
      month:49,
      feature:[
       
        {
          name:'unlimited User'
        },
        {
          name:'50GB Storage'
        },
        {
          name:'Unlimited Public Projects'
        },
        {
          name:'Community Access'
        },      
        {
          name:'Unlimited Private Projects'
        },
        {
          name:'Dedicated Phone Support',
        },
        {
          name:'Free Subdomain',
        },
        {
          name:'Monthly Status Reports'
        }
        ]
    }]

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">{
          priceCard.map((element)=>{
            return <Price details={element}></Price>
          })
        }
        </div>
      </div>
    </section>
  );
}

export default App;
