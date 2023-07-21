const [graphicdata, setGraphicData] = useState([]);
  const [websitedata, setWebsiteData] = useState([]);
  const [digitalartdata, setDigitalartData] = useState([]);
  const [photographydata, setPhotographyData] = useState([]);
  const [advertisementdata, setAdvertisementData] = useState([]);
  const [contactdata, setContactData] = useState([]);
  const [feedbackdata, setFeedbackData] = useState([]);

  useEffect(() => {
    fetchgraphic()
    fetchweb()
    fetchart()
    fetchphoto()
    fetchadv()
    fetchcontact()
    fetchfb()
  }, []);
  
  const fetchgraphic =()=>{
    const url = "http://localhost:5000/graphic";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGraphicData(data));
  }

  const fetchweb =()=> {
    const url = "http://localhost:5000/website";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWebsiteData(data));
  }

  
  const fetchart = () => {
    const url = "http://localhost:5000/digitalart";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDigitalartData(data));
  }
  
  const fetchphoto =() => {
    const url = "http://localhost:5000/photography";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotographyData(data));
  }
 
  const fetchadv =() => {
    const url = "http://localhost:5000/advertisement";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdvertisementData(data));
  }
  
  const fetchcontact =() => {
    const url = "http://localhost:5000/contact";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setContactData(data));
  }
  
  const fetchfb =() => {
    const url = "http://localhost:5000/feedback";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFeedbackData(data));
  }

  const deleteImage = (id) =>{
    constconfirm("Are you sure to delete it?")
    fetch(`http://localhost:5000/image/${id}`,{method: 'delete'}).then((res)=>console.log(res.json()))
    fetchgraphic()
    fetchweb()
    fetchart()
    fetchphoto()
  }

  // const deleteContact = async (id) =>{
  //   await fetch(`http://localhost:5000/contact/${id}`)
  //   fetchcontact()
  // }

  // const deleteFeedback = async (id) =>{
  //   await fetch(`http://localhost:5000/feedback/${id}`)
  //   fetchfb()
  // }

  const deleteAdv = async (id) =>{
    alert(id)
    await fetch(`http://localhost:5000/adv/${id}`,{method: 'delete'})
    fetchadv()
  }
