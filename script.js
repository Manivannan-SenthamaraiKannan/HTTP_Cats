const baseURL = "https://http.cat/";

const httpRespCode =  async() =>{
    const response = await fetch(`${baseURL}/${searchInp}`)
    const siteResp = await response.json();
    console.log(siteResp);
}

const searchInp = document.getElementById("inpSearch").value;


httpRespCode()