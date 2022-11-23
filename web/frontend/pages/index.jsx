import {
  Card,
  EmptyState,
  Layout,
  Page,DatePicker,
  SkeletonBodyText,Heading,Stack,TextField,Button
} from "@shopify/polaris";
import { TitleBar,useNavigate,Loading } from "@shopify/app-bridge-react";
import { useState , useCallback} from "react";
import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import moment from "moment/moment";

export default function HomePage() {
  const navigate = useNavigate();
  const [{month, year}, setDate] = useState({month: 1, year:2022});
  const [{monthh, yearr}, setDatee] = useState({monthh: 1, yearr:2022});
  const [dateRegister,setDateRegister]=useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
  });
  const [typeService,setTypeService]=useState();
  const [nameClient,setNameClient]=useState();
  const [cellPhone,setCellPhone]=useState();
  const [dateService,setDateService]=useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
  });
  const [hourCollect,setHourCollect]=useState();
 
  const [lookDetailCollect,setLookDetailCollect]=useState();
  const [paymentPage,setPaymentPage]=useState();
  const [attended,setAttended]=useState();
  const [clientt,setClientt]=useState();
  const [districtTo,setDistrictTo]=useState();
   const [addressFromm,setAddressFromm]=useState();
/*   const [referenceNumber,setReferenceNumber]=useState(); */
  
  const handleMonthChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );
  const handleMonthChangeS = useCallback(
    (monthh, yearr) => setDatee({monthh, yearr}),
    [],
  );
 
  const EnviarDatos= async()=>{
    const url="https://xpresscourier.net/api/service/create/"

    let res= await fetch(url,{
      method:'POST',
      credentials: "same-origin",
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      
      },

      body:JSON.stringify({
        date:moment(dateRegister.end).format('YYYY-MM-DD'),
        type_service:typeService,
        nom_from:nameClient,
        phone_from:cellPhone,
        date_from:moment(dateService.end).format('YYYY-MM-DD'),
        time_from:hourCollect,
        details_from:lookDetailCollect,
        payment_page:parseInt(paymentPage),
        attended:parseInt(attended),
        client:parseInt(clientt),
        district_from:parseInt(districtTo),
        address_from:parseInt(addressFromm)
      })
    })
     return await res.json()
   

  }
  console.log("fecharegistro",dateRegister)
  return (
    <Page narrowWidth>
     <Heading>SERVICIO EXPRESS COURRIER</Heading>
     <Card>
     <Card.Section>
      <Stack vertical>
      <Layout>
        <Layout.Section>
          <Card title="Fecha de Registro" sectioned>
            
          <DatePicker
         month={month}
         year={year}
         onChange={setDateRegister}
         onMonthChange={handleMonthChange}
         selected={dateRegister}
         
        />
          </Card>
          <Card  sectioned>
            <TextField
              label="Tipo de Servicio"
              value={typeService}
              onChange={setTypeService}
              autoComplete="off"
            />
             <TextField
              label="Nombre Cliente"
              value={nameClient}
              onChange={setNameClient}
              autoComplete="off"
            />
             <TextField
              label="Celular"
              value={cellPhone}
              onChange={setCellPhone}
              autoComplete="off"
            />
            
          </Card>
          <Card title="Fecha de Servicio" sectioned>
          <DatePicker
         month={monthh}
         year={yearr}
         onChange={setDateService}
         onMonthChange={handleMonthChangeS}
         selected={dateService}
         
        />
          </Card>
          <TextField
              label="Hora de Recoger"
              value={hourCollect}
              onChange={setHourCollect}
              autoComplete="off"
            />
          <TextField
              label="Detalle u Observación de Recoger"
              value={lookDetailCollect}
              onChange={setLookDetailCollect}
              autoComplete="off"
            />
            <TextField
              label="Payment page"
              value={paymentPage}
              onChange={setPaymentPage}
              autoComplete="off"
            />
            <TextField
              label="Attended"
              value={attended}
              onChange={setAttended}
              autoComplete="off"
            />
            <TextField
              label="Client"
              value={clientt}
              onChange={setClientt}
              autoComplete="off"
            />
            <TextField
              label="District to"
              value={districtTo}
              onChange={setDistrictTo}
              autoComplete="off"
            />
             <TextField
              label="Address from"
              value={addressFromm}
              onChange={setAddressFromm}
              autoComplete="off"
            />
            
        </Layout.Section>

      </Layout>
      
      <Button primary onClick={()=>EnviarDatos()} >
              ENVIAR
            </Button>
      </Stack>
      </Card.Section>
     </Card>
    </Page>
  );
}
