//<script type="text/javascript">
//-------------------Get the data---------------------------------------------------------
var myData = "";
var Addresses = {
    //"address1": { BaseAddress },
    //"address2": { BaseAddress },
    //"address3": { BaseAddress }
}
function BaseAddress() {
    this.ADDRESS_1 = "";
    this.ADDRESS_2 =  "";
    this.ADDRESS_3 = "";
    this.CITY = "";
    this.COUNTRY = "";
    this.COUNTY = "";
    this.EMAIL = "";
    this.FAX = "";
    this.NOTE = "";
    this.PHONE = "";
    this.ZIP = "";
    this.PREFERRED_MAIL = "";
    this.PREFERRED_BILL = "";
    this.PREFERRED_SHIP = "";
    this.STATE_PROVINCE = "";
    this.TOLL_FREE = "";
}
function GetName_Address(partyID){
//jQuery.ajax("https://test.coptont.org/api/Name_address?PartyID="+partyID,
jQuery.ajax(gWebRoot + query + "Name_Address?PartyID="+partyID,
{
    type : "get",
    contentType: "application/json",
    headers: {"RequestVerificationToken": document.getElementById("__RequestVerificationToken").value},
    async:false,
    success: function(data){
    console.log(data)
    data.Items.$values.forEach(function(element,i) {
        let myValues = element.Properties.$values;
        var ADDRESS_NUM = myValues.filter(x=>x.Name=="ADDRESS_NUM")[0].Value.$value
            Addresses[ADDRESS_NUM] =  new BaseAddress() ;
            Addresses[ADDRESS_NUM].ADDRESS_1 =  myValues.filter(x=>x.Name=="ADDRESS_1")[0].Value
            Addresses[ADDRESS_NUM].ADDRESS_2 =  myValues.filter(x=>x.Name=="ADDRESS_2")[0].Value
            Addresses[ADDRESS_NUM].ADDRESS_3 =  myValues.filter(x=>x.Name=="ADDRESS_3")[0].Value
            Addresses[ADDRESS_NUM].CITY =  myValues.filter(x=>x.Name=="CITY")[0].Value
            Addresses[ADDRESS_NUM].COUNTRY =  myValues.filter(x=>x.Name=="COUNTRY")[0].Value
            Addresses[ADDRESS_NUM].COUNTY =  myValues.filter(x=>x.Name=="COUNTY")[0].Value
            Addresses[ADDRESS_NUM].EMAIL =  myValues.filter(x=>x.Name=="EMAIL")[0].Value
            Addresses[ADDRESS_NUM].FAX =  myValues.filter(x=>x.Name=="FAX")[0].Value
            Addresses[ADDRESS_NUM].NOTE =  myValues.filter(x=>x.Name=="NOTE")[0].Value
            Addresses[ADDRESS_NUM].PHONE =  myValues.filter(x=>x.Name=="PHONE")[0].Value
            Addresses[ADDRESS_NUM].ZIP =  myValues.filter(x=>x.Name=="ZIP")[0].Value
            Addresses[ADDRESS_NUM].PREFERRED_MAIL =  myValues.filter(x=>x.Name=="PREFERRED_MAIL")[0].Value.$value
            Addresses[ADDRESS_NUM].PREFERRED_BILL =  myValues.filter(x=>x.Name=="PREFERRED_BILL")[0].Value.$value
            Addresses[ADDRESS_NUM].PREFERRED_SHIP =  myValues.filter(x=>x.Name=="PREFERRED_SHIP")[0].Value.$value
            Addresses[ADDRESS_NUM].STATE_PROVINCE =  myValues.filter(x=>x.Name=="STATE_PROVINCE")[0].Value
            Addresses[ADDRESS_NUM].TOLL_FREE =  myValues.filter(x=>x.Name=="TOLL_FREE")[0].Value
        
        //Addresses[element.Properties.$values[4].Value.$value] = BaseAddress ;
        //Addresses[element.Properties.$values[4].Value.$value]
        
        //console.log(element);
        //console.log(i);
        //console.log(element.Properties.$values[7].Value);   //City Name
    });
    }
})
    console.table(Addresses);
    //await GetandUpdateAllAddresses(partyID);
}
function GetandUpdateAllAddresses1(partyID){
console.log("________________________first function finished");
//jQuery.ajax("https://test.coptont.org/api/party/"+partyID,
jQuery.ajax(gWebRoot + query + "party/"+partyID,
{
    type : "GET",
    contentType: "application/json",
    headers: {"RequestVerificationToken": document.getElementById("__RequestVerificationToken").value},
    async:false,
    success: function(data){
    //console.log(JSON.stringify(data.Addresses.$values[1]))
    //console.log(data.Addresses.$values[1].Address.CityName);
    //console.table(data);
    //console.table(Addresses);
    data.Addresses.$values.forEach(function(element,i) {
        console.group("Address - "+(i+1));
        var needAddressUpdate = false;
        console.log("First-->"+needAddressUpdate);
        //let myValues = element.Properties.$values;
        console.table(element);
        myData = JSON.parse(JSON.stringify(element)); //new json object here
        var ADDRESS_NUM = element.FullAddressId
		console.table(myData.Address.AddressLines);
        console.log(ADDRESS_NUM);
        console.table(Addresses[ADDRESS_NUM]);
        if(Addresses[ADDRESS_NUM] == undefined){
            return;
        }
			
            if (Addresses[ADDRESS_NUM].ADDRESS_1 != '' && Addresses[ADDRESS_NUM].ADDRESS_1 != undefined) { myData.Address.AddressLines.$values[0] = Addresses[ADDRESS_NUM].ADDRESS_1 }
            if (Addresses[ADDRESS_NUM].ADDRESS_2 != '' && Addresses[ADDRESS_NUM].ADDRESS_2 != undefined) { myData.Address.AddressLines.$values[1] = Addresses[ADDRESS_NUM].ADDRESS_2 }
            if (Addresses[ADDRESS_NUM].ADDRESS_3 != '' && Addresses[ADDRESS_NUM].ADDRESS_3 != undefined) { myData.Address.AddressLines.$values[2] = Addresses[ADDRESS_NUM].ADDRESS_3 }
            if (Addresses[ADDRESS_NUM].CITY != '' && Addresses[ADDRESS_NUM].CITY != undefined) { myData.Address.CityName = Addresses[ADDRESS_NUM].CITY }
            if (Addresses[ADDRESS_NUM].COUNTRY != '' && Addresses[ADDRESS_NUM].COUNTRY != undefined) { myData.Address.CountryName = Addresses[ADDRESS_NUM].COUNTRY }
            if (Addresses[ADDRESS_NUM].STATE_PROVINCE != '' && Addresses[ADDRESS_NUM].STATE_PROVINCE != undefined) { myData.Address.CountrySubEntityCode = Addresses[ADDRESS_NUM].STATE_PROVINCE }
            if (Addresses[ADDRESS_NUM].ZIP != '' && Addresses[ADDRESS_NUM].ZIP != undefined) { myData.Address.PostalCode = Addresses[ADDRESS_NUM].ZIP }
            if (Addresses[ADDRESS_NUM].EMAIL != '' && Addresses[ADDRESS_NUM].EMAIL != undefined) { myData.Email = Addresses[ADDRESS_NUM].EMAIL }
            if (Addresses[ADDRESS_NUM].PHONE != '' && Addresses[ADDRESS_NUM].PHONE != undefined) { myData.Phone = Addresses[ADDRESS_NUM].PHONE }
            if (Addresses[ADDRESS_NUM].FAX != '' && Addresses[ADDRESS_NUM].FAX != undefined) { myData.Fax = Addresses[ADDRESS_NUM].FAX }
            
            if(Addresses[ADDRESS_NUM].PREFERRED_MAIL) {console.log('mail true')}
            if(Addresses[ADDRESS_NUM].PREFERRED_BILL) {console.log('bill true')}
            if(Addresses[ADDRESS_NUM].PREFERRED_SHIP) {console.log('ship true')}
            //Addresses[ADDRESS_NUM].COUNTY =  myValues.filter(x=>x.Name=="COUNTY")[0].Value
            //Addresses[ADDRESS_NUM].TOLL_FREE =  myValues.filter(x=>x.Name=="TOLL_FREE")[0].Value
            //Addresses[ADDRESS_NUM].NOTE =  myValues.filter(x=>x.Name=="NOTE")[0].Value
                

            console.warn(element.CommunicationPreferences.$values.filter(x=>x.Reason=="mail")[0] != undefined);
            console.warn(element.CommunicationPreferences.$values.filter(x=>x.Reason=="bill")[0] != undefined);
            console.warn(element.CommunicationPreferences.$values.filter(x=>x.Reason=="ship")[0] != undefined);
            console.warn(Addresses[ADDRESS_NUM].PREFERRED_MAIL);
            console.warn(Addresses[ADDRESS_NUM].PREFERRED_BILL);
            console.warn(Addresses[ADDRESS_NUM].PREFERRED_SHIP);
			
			if(element.Address.hasOwnProperty('AddressLines') && element.Address.AddressLines.hasOwnProperty('$values')){
				if (
					element.Address.AddressLines.$values[0] != Addresses[ADDRESS_NUM].ADDRESS_1 ||
					element.Address.AddressLines.$values[1] != Addresses[ADDRESS_NUM].ADDRESS_2 ||
					element.Address.AddressLines.$values[2] != Addresses[ADDRESS_NUM].ADDRESS_3 
					){
						needAddressUpdate = true
					}
			}
			
			
            //console.error(typeof element.Address.AddressLines.$values[0] == undefined);
			
        /////////////////////
		if (
            //element.Address.AddressLines.$values[0] != Addresses[ADDRESS_NUM].ADDRESS_1 ||
            //element.Address.AddressLines.$values[1] != Addresses[ADDRESS_NUM].ADDRESS_2 ||
            //element.Address.AddressLines.$values[2] != Addresses[ADDRESS_NUM].ADDRESS_3 ||
            element.Address.CityName != Addresses[ADDRESS_NUM].CITY ||
            element.Address.CountryName != Addresses[ADDRESS_NUM].COUNTRY ||
            element.Address.CountrySubEntityCode != Addresses[ADDRESS_NUM].STATE_PROVINCE ||
            element.Address.PostalCode != Addresses[ADDRESS_NUM].ZIP ||
            element.Email != Addresses[ADDRESS_NUM].EMAIL  ||
            element.Phone != Addresses[ADDRESS_NUM].PHONE ||
            element.Fax != Addresses[ADDRESS_NUM].FAX ||
            ((element.CommunicationPreferences.$values.filter(x=>x.Reason=="mail")[0] != undefined) != (Addresses[ADDRESS_NUM].PREFERRED_MAIL)) ||
            ((element.CommunicationPreferences.$values.filter(x=>x.Reason=="bill")[0] != undefined) != (Addresses[ADDRESS_NUM].PREFERRED_BILL)) ||
            ((element.CommunicationPreferences.$values.filter(x=>x.Reason=="ship")[0] != undefined) != (Addresses[ADDRESS_NUM].PREFERRED_SHIP)) 
        ){

            needAddressUpdate = true
        }
        
        console.log("Second-->"+needAddressUpdate);
        console.log(element);
        console.log(myData);
        console.log("Cached City--> " + element.Address.CityName);
        console.log("SQL Updated City--> " + myData.Address.CityName +" or "+ Addresses[ADDRESS_NUM].CITY);
        
        myData.Address.CarrierRoute = '1';
        if (needAddressUpdate)
            {
                ExecuteUpdateData(myData,partyID,(i+1)); // Calls UpdateData function to update the record
            }
        console.groupEnd();
    });
    //myData.Addresses.$values[1].Address.CityName = '';
    //console.log(myData);
    }
})
}
//-------------------Update the data---------------------------------------------------------
function ExecuteUpdateData(jsondata,partyID,AddressNumber){
    console.group("AddressUpdating #"+AddressNumber )
    var data = 
    {
        "$type": "Asi.Soa.Membership.DataContracts.AddressUpdateRequest, Asi.Contracts",
        "EntityTypeName": "Party",
        "OperationName": "AddressUpdate",
        "PartyId": "",
        "AddressUpdated": ""
    }
    console.log(data)
    data["AddressUpdated"] = jsondata ;
    data["PartyId"] = partyID ;
    console.log(data);
    //return;
    //jQuery.ajax("https://test.coptont.org/api/party/_execute",
    jQuery.ajax(gWebRoot + query + "party/_execute",
    {
        type : "post",
        contentType: "application/json",
        async: false,
        headers: {"RequestVerificationToken": document.getElementById("__RequestVerificationToken").value},
        data: JSON.stringify(data),
        success: function(data){
            console.log(data)
        }
    })
    console.log("________________________");
    console.groupEnd();
}
//_______________________________
var obj = jQuery.parseJSON(jQuery('#__ClientContext').val());
var gWebRoot = gWebRoot = obj.baseUrl;
var query="api/";
jQuery( document ).ready(function() {
    gWebRoot = gWebRoot.replace("http:", "https:");
    onLoad();
});
var prm1 = Sys.WebForms.PageRequestManager.getInstance();
   prm1.add_endRequest(function() {
       onPostBack();
  });
function onLoad(){
    onPostBack();
}
function onPostBack(){
    main()
    .then(r => console.log("Result:", r))
    .catch(err => console.log("An error occurred", err));
}
async function main() {
    var partyID = obj.selectedPartyId;
    //partyID =  5045;
    await GetName_Address(partyID);
    await GetandUpdateAllAddresses(partyID);
    //console.clear();
}
//</script>
