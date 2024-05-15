var Obj_Age;
var Obj_female;	
var Obj_HBP1;	
var Obj_HGB;	
var Obj_PLT;
var Obj_ALB;	
var Obj_hsCRP;	
var Obj_C3;	
var Obj_ESR;	
var Obj_anti_dsDNA1;	
var Obj_Hematuresis1;	
var Obj__24hUTP;	
var Obj_eGFR;	
var Obj_Leukocyte;	
var Obj_sCr;	
var Obj_UA;	
var Obj_C4;		
var Obj_ANA;


function init(){
	Obj_Age="";	
	Obj_HBP1="";	
	Obj_HGB="";	
	Obj_PLT="";
	Obj_ALB="";	
	Obj_hsCRP="";	
	Obj_C3="";	
	Obj_ESR="";	
	Obj_anti_dsDNA1="";	
	Obj_Hematuresis1="";	
	Obj__24hUTP="";	
	Obj_eGFR="";	
	Obj_Leukocyte="";	
	Obj_sCr="";	
	Obj_UA="";	
	Obj_C4="";		
	Obj_ANA="";
	 result_info="";
	 result_span="";
}
function getRisk(){		
		Obj_Age = $("#Age");
		Obj_Female = $("#Female");	
		Obj_HBP1 = $("#HBP1");	
		Obj_HGB = $("#HGB");	
		Obj_PLT = $("#PLT");
		Obj_ALB = $("#ALB");	
		Obj_hsCRP = $("#hsCRP");	
		Obj_C3 = $("#C3");	
		Obj_ESR = $("#ESR");	
		Obj_anti_dsDNA1 = $("#anti_dsDNA1");	
		Obj_Hematuresis1 = $("#Hematuresis1");	
		Obj__24hUTP = $("#_24hUTP");	
		Obj_eGFR = $("#eGFR");	
		Obj_Leukocyte = $("#Leukocyte");	
		Obj_sCr = $("#sCr");	
		Obj_UA = $("#UA");	
		Obj_C4 = $("#C4");		
		Obj_ANA = $("#ANA");
		
		
		Age = $("#Age").val();
		Female =$("input[name='Female']:checked").val();	
		HBP1 = $("input[name='HBP1']:checked").val();	
		HGB = $("#HGB").val();	
		PLT = $("#PLT").val();
		ALB = $("#ALB").val();	
		hsCRP = $("#hsCRP").val();	
		C3 = $("#C3").val();	
		ESR = $("#ESR").val();	
		anti_dsDNA1 = $("input[name='anti_dsDNA1']:checked").val();		
		Hematuresis1 = $("input[name='Hematuresis1']:checked").val();	
		_24hUTP = $("#_24hUTP").val();	
		eGFR = $("#eGFR").val();	
		Leukocyte = $("#Leukocyte").val();	
		sCr = $("#sCr").val();	
		UA = $("#UA").val();	
		C4 = $("#C4").val();		
		ANA = $("input[name='ANA']:checked").val();
		
		//必填验证
		if(!checkForm1()){
			return false;
		}
		var result = "";
		//公式4
		if(!checkForm4_isnull()){
				result = compute(4);
				
		//公式3
		} else if(!checkForm3_isnull()){
				result = compute(3);
		//公式2
		}else if(!checkForm2_isnull()){
				result = compute(2);
		//公式1
		}else {		
			result = compute(1);	
		}
		$("#result_info").html(result);
		$("#result_span").fadeIn("slow");
		init();
	}
function checkForm1() {	
		if (Age!=null && Age!="" && Age>=0 && Age<=120 ) {
			$(Obj_Age).css("border", "");
		} else {
			$(Obj_Age).css("border", "1px solid red");
			$(Obj_Age).focus();
			return false;
		}
		if (Female==null || Female=="" || Female==undefined ) {
			$("#radio_span").html("Whether the participant is a female");			
			$('html, body').animate({
				scrollTop: 0
			  }, -1000);
			return false;
		}else{			
			$("#radio_span").html("&nbsp;");
		}
		
		return true;
}
function checkForm2_isnull() {	
	if (HBP1==null || HBP1=="" || HBP1==undefined || 
		HGB==null || HGB=="" || 
		PLT==null || PLT=="" || 
		ALB==null || ALB=="" || 
		hsCRP==null || hsCRP=="" || 
		C3==null || C3=="" || 
		ESR==null || ESR=="" || 
		anti_dsDNA1==null || anti_dsDNA1=="" || anti_dsDNA1==undefined
		){
			return true;
	}           
	return false;
}

function checkForm3_isnull() {	
	if (HBP1==null || HBP1=="" || HBP1==undefined || 
		HGB==null || HGB=="" || 
		PLT==null || PLT=="" || 
		ALB==null || ALB=="" || 
		hsCRP==null || hsCRP=="" || 
		C3==null || C3=="" || 
		ESR==null || ESR=="" || 
		anti_dsDNA1==null || anti_dsDNA1=="" || anti_dsDNA1==undefined ||
		Hematuresis1==null || Hematuresis1=="" || Hematuresis1 == undefined ||
		_24hUTP==null || _24hUTP=="" ||
		eGFR==null || eGFR==""){
			return true;
	}           
	return false;
}

function checkForm4_isnull() {	
	if (HBP1==null || HBP1=="" || HBP1==undefined || 
		HGB==null || HGB=="" || 
		PLT==null || PLT=="" || 
		ALB==null || ALB=="" || 
		hsCRP==null || hsCRP=="" || 
		C3==null || C3=="" || 
		ESR==null || ESR=="" || 
		anti_dsDNA1==null || anti_dsDNA1=="" || anti_dsDNA1==undefined ||
		Hematuresis1==null || Hematuresis1=="" || Hematuresis1 == undefined ||
		_24hUTP==null || _24hUTP=="" ||
		eGFR==null || eGFR=="" || 
		Leukocyte==null || Leukocyte=="" || 
		sCr==null || sCr=="" || 
		UA==null || UA=="" || 
		C4==null || C4=="" || 
		ANA==null || ANA=="" || ANA==undefined){
		return true;
	}           
	return false;
}

function compute(Model){
	var FFMV = "";
	if(Model==1){		
		FFMV = 3.43 + (-1.15) * Math.log(Age) + (-1.00) * Female;
	}else if(Model==2){		
		FFMV = 13.14 + (-0.84) * Math.log(Age) + (-0.75) * Female + (0.34) * HBP1 + (-1.98) * Math.log(HGB) + (0.05) * Math.sqrt(PLT) + (-0.66) * Math.sqrt(ALB) + (0.20) * Math.log(hsCRP) + (-0.79) * Math.sqrt(C3) + (0.01) * Math.sqrt(ESR) + (0.84) * anti_dsDNA1;	
	}else if(Model==3){
		FFMV = 9.24 + (-0.99) * Math.log(Age) + (-0.74) * Female + (0.21) * HBP1 + (-1.62) * Math.log(HGB) + (0.09) * Math.sqrt(PLT) + (-0.30) * Math.sqrt(ALB) + (0.06) * Math.log(hsCRP) + (-1.33) * Math.sqrt(C3) + (0.06) * Math.sqrt(ESR) + (0.56) * anti_dsDNA1 + (2.02) * Hematuresis1 + (-0.01) * Math.log(_24hUTP) + (-0.01) * eGFR;		
	}else if(Model==4){		
		FFMV = 5.02+(-0.88) * Math.log(Age) + (-0.62) * Female + (0.02) * HBP1 + (0) * Math.log(Leukocyte) + (-0.67) * Math.log(HGB) + (0.03) * Math.sqrt(PLT) + (1.60) * Hematuresis1 + (0) * Math.log(_24hUTP) + (-0.41) * Math.sqrt(ALB) + (0) * Math.log(sCr) + (-0.01) * eGFR + (0) * Math.sqrt(UA) + (0.05) * Math.log(hsCRP) + (0) * Math.sqrt(C3) + (-0.52) * Math.log(C4) + (0.03) * Math.sqrt(ESR) + (-0.23) * ANA + (0.17) * anti_dsDNA1;	
	}
	return FFMV.toFixed(3);
}

function csvToObject(csvString){
	var csvarry = csvString.split("\r\n");
	var datas = [];
	var headers = csvarry[0].split(",");
	for(var i = 1;i<csvarry.length;i++){
		var data = {};
		var temp = csvarry[i].split(",");
		if(temp==""){
			continue;
		}
		for(var j = 0;j<temp.length;j++){
			data[headers[j]] = temp[j];
		}
		datas.push(data);
	}
	 return datas;
}


 function FuncCSVInport(gender) {
	 $("#csvFileInput_" + gender).val("");
	$("#csvFileInput_" + gender).click();
 }
 function readCSVFile(obj,type,gender) {
	 var reader = new FileReader();
	 reader.readAsText(obj.files[0]);
	 var fname=obj.files[0].name;
	 var ext = fname.substr(fname.lastIndexOf(".")+1);
	 if(ext!="csv" && ext!="CSV" ){
		 blockUI("Please upload the CVS file");
		 return;
	 }
	 reader.onload = function () {
		   var datas = csvToObject(this.result);
			//console.log(data);
			if(datas.length==0){
				blockUI("Please upload the file according to the template format");
				return;
			}
			
			const rows = [];
			let header =[];
			if(type == "VAT"){
				header=["eid", "age", "height", "weight", "Waist_circumference", "Hip_circumference", "Whole_body_fat_mass", "Whole_body_fat_free_mass", "Trunk_fat_mass", "Trunk_fat_free_mass", "Basal_metabolic_rate", "Leg_fatfree_mass","VAT_LASSO_mod1","VAT_LASSO_mod2","VAT_LASSO_mod3"];
			}else if(type == "ASAT"){
				header=["eid", "age", "height", "weight", "Waist_circumference", "Hip_circumference", "Whole_body_fat_mass", "Whole_body_fat_free_mass", "Trunk_fat_mass", "Trunk_fat_free_mass", "Basal_metabolic_rate", "Leg_fatfree_mass","SAT_LASSO_mod1","SAT_LASSO_mod2","SAT_LASSO_mod3"];				
			}else{
				header=["eid", "age", "height", "weight", "Waist_circumference", "Hip_circumference", "Whole_body_fat_mass", "Whole_body_fat_free_mass", "Trunk_fat_mass", "Trunk_fat_free_mass", "Basal_metabolic_rate", "Leg_fatfree_mass","FFMV_LASSO_mod1","FFMV_LASSO_mod2","FFMV_LASSO_mod3"];				
			}		
			rows.push(header);
			var msg="";
			for(var i = 0;i<datas.length;i++){
				var data = datas[i];
				msg = batchCheck1(data);
				if(msg != ""){
					blockUI(msg);
					return;
				}
				let row = [];
				if(type == "VAT"){		
					var VAT_LASSO_mod1 = compute_vat(gender,1,data.age,data.height,data.weight);
					var VAT_LASSO_mod2="";
					var VAT_LASSO_mod3="";
					
					if(data.Waist_circumference!=null && data.Waist_circumference!="" && data.Hip_circumference!=null && data.Hip_circumference!=""){
						msg = batchCheck2(data);
						if(msg != ""){
							blockUI(msg)
							return;
						}
						VAT_LASSO_mod2 = compute_vat(gender,2,data.age,data.height,data.weight,data.Waist_circumference,data.Hip_circumference);
						
						if(data.Whole_body_fat_mass!=null && data.Whole_body_fat_mass!="" && data.Whole_body_fat_free_mass!=null && data.Whole_body_fat_free_mass!="" && data.Trunk_fat_mass!=null && data.Trunk_fat_mass!="" && data.Trunk_fat_free_mass!=null && data.Trunk_fat_free_mass!="" && data.Leg_fatfree_mass!=null && data.Leg_fatfree_mass!="" && data.Basal_metabolic_rate!=null && data.Basal_metabolic_rate!=""){
							msg = batchCheck3(data);
							if(msg != ""){
								blockUI(msg)
								return;
							}	
							VAT_LASSO_mod3 = compute_vat(gender,3,data.age,data.height,data.weight,data.Waist_circumference,data.Hip_circumference,data.Whole_body_fat_mass,data.Whole_body_fat_free_mass,data.Trunk_fat_mass,data.Trunk_fat_free_mass,data.Leg_fatfree_mass,data.Basal_metabolic_rate);
						}
					}	
					row = [data.eid,data.age,data.height,data.weight,data.Waist_circumference,data.Hip_circumference,data.Whole_body_fat_mass,data.Whole_body_fat_free_mass,data.Trunk_fat_mass,data.Trunk_fat_free_mass,data.Basal_metabolic_rate,data.Leg_fatfree_mass,VAT_LASSO_mod1,VAT_LASSO_mod2,VAT_LASSO_mod3];
				}else if(type == "ASAT"){
					var SAT_LASSO_mod1 = compute_asat(gender,1,data.age,data.height,data.weight);					
					var SAT_LASSO_mod2="";
					var SAT_LASSO_mod3="";
					if(data.Waist_circumference!=null && data.Waist_circumference!="" && data.Hip_circumference!=null && data.Hip_circumference!=""){
						msg = batchCheck2(data);
						if(msg != ""){
							blockUI(msg)
							return;
						}
						SAT_LASSO_mod2 = compute_asat(gender,2,data.age,data.height,data.weight,data.Waist_circumference,data.Hip_circumference);
						
						if(data.Whole_body_fat_mass!=null && data.Whole_body_fat_mass!="" && data.Whole_body_fat_free_mass!=null && data.Whole_body_fat_free_mass!="" && data.Trunk_fat_mass!=null && data.Trunk_fat_mass!="" && data.Trunk_fat_free_mass!=null && data.Trunk_fat_free_mass!="" && data.Leg_fatfree_mass!=null && data.Leg_fatfree_mass!="" && data.Basal_metabolic_rate!=null && data.Basal_metabolic_rate!=""){
							msg = batchCheck3(data);
							if(msg != ""){
								blockUI(msg)
								return;
							}	
							SAT_LASSO_mod3 = compute_asat(gender,3,data.age,data.height,data.weight,data.Waist_circumference,data.Hip_circumference,data.Whole_body_fat_mass,data.Whole_body_fat_free_mass,data.Trunk_fat_mass,data.Trunk_fat_free_mass,data.Leg_fatfree_mass,data.Basal_metabolic_rate);	
						}
					}	
					row = [data.eid,data.age,data.height,data.weight,data.Waist_circumference,data.Hip_circumference,data.Whole_body_fat_mass,data.Whole_body_fat_free_mass,data.Trunk_fat_mass,data.Trunk_fat_free_mass,data.Basal_metabolic_rate,data.Leg_fatfree_mass,SAT_LASSO_mod1,SAT_LASSO_mod2,SAT_LASSO_mod3];			
				}else{
					var FFMV_LASSO_mod1 = compute_ffmv(gender,1,data.age,data.height,data.weight);					
					var FFMV_LASSO_mod2="";
					var FFMV_LASSO_mod3="";
					if(data.Waist_circumference!=null && data.Waist_circumference!="" && data.Hip_circumference!=null && data.Hip_circumference!=""){
						msg = batchCheck2(data);
						if(msg != ""){
							blockUI(msg)
							return;
						}
						FFMV_LASSO_mod2 = compute_ffmv(gender,2,data.age,data.height,data.weight,data.Waist_circumference,data.Hip_circumference);
						
						if(data.Whole_body_fat_mass!=null && data.Whole_body_fat_mass!="" && data.Whole_body_fat_free_mass!=null && data.Whole_body_fat_free_mass!="" && data.Trunk_fat_mass!=null && data.Trunk_fat_mass!="" && data.Trunk_fat_free_mass!=null && data.Trunk_fat_free_mass!="" && data.Leg_fatfree_mass!=null && data.Leg_fatfree_mass!="" && data.Basal_metabolic_rate!=null && data.Basal_metabolic_rate!=""){
							msg = batchCheck3(data);
							if(msg != ""){
								blockUI(msg)
								return;
							}	
							FFMV_LASSO_mod3 = compute_ffmv(gender,3,data.age,data.height,data.weight,data.Waist_circumference,data.Hip_circumference,data.Whole_body_fat_mass,data.Whole_body_fat_free_mass,data.Trunk_fat_mass,data.Trunk_fat_free_mass,data.Leg_fatfree_mass,data.Basal_metabolic_rate);
						}
					}						
					
					row = [data.eid,data.age,data.height,data.weight,data.Waist_circumference,data.Hip_circumference,data.Whole_body_fat_mass,data.Whole_body_fat_free_mass,data.Trunk_fat_mass,data.Trunk_fat_free_mass,data.Basal_metabolic_rate,data.Leg_fatfree_mass,FFMV_LASSO_mod1,FFMV_LASSO_mod2,FFMV_LASSO_mod3];
				}				
				rows.push(row);
			}			
			var file_name = (type + "-") + (gender==1?"Male":"Female") + "-Results";
			downloadCvs(rows,file_name);
	}
}

function batchCheck1(data) {
	//console.log(data);
	var msg="";
	if(data.age==null ||  data.age=="" ||  data.age<0 || data.age>120 ){
		msg = msg + '"age"<br/>';
	}
	if(data.height==null ||  data.height=="" || data.height<50 || data.height>250){
		msg = msg + '"height"<br/>';
	}
	if(data.weight==null ||  data.weight=="" || data.weight<20 || data.weight>250){
		msg = msg + '"weight"<br/>';
	}
	if(msg!=""){
		msg ='The following fields are incorrect for <b>eid = ' + data.eid  +  '</b>:<br/><b>' + msg + '</b>';	
	}
	return msg;
}

function batchCheck2(data) {	
	var msg="";
	if (data.Waist_circumference<15 || data.Waist_circumference>250 ) {
		msg = msg + '"Waist_circumference"<br/>';
	}
	if (data.Hip_circumference<15 || data.Hip_circumference>250 ) {
		msg = msg + '"Hip_circumference"<br/>';
	}
	if(msg!=""){
		msg ='The following fields are incorrect for <b>eid = ' + data.eid  +  '</b>:<br/><b>' + msg + '</b>';	
	}
	return msg;
}

function batchCheck3(data) {
	var msg="";
	if (data.Whole_body_fat_mass<0 || data.Whole_body_fat_mass>150 ) {
		msg = msg + '"Whole_body_fat_mass"<br/>';
	}
	if (data.Whole_body_fat_free_mass<0 || data.Whole_body_fat_free_mass>150 ) {
		msg = msg + '"Whole_body_fat_free_mass"<br/>';
	}
	if (data.Trunk_fat_mass<0 || data.Trunk_fat_mass>80 ) {
		msg = msg + '"Trunk_fat_mass"<br/>';
	}
	if (data.Trunk_fat_free_mass<0 || data.Trunk_fat_free_mass>80 ) {
		msg = msg + '"Trunk_fat_free_mass"<br/>';
	}
	if (data.Leg_fatfree_mass<0 || data.Leg_fatfree_mass>40 ) {
		msg = msg + '"Leg_fatfree_mass"<br/>';
	}
	if (data.Basal_metabolic_rate<500 || data.Basal_metabolic_rate>30000 ) {
		msg = msg + '"Basal_metabolic_rate"<br/>';
	}
	if(msg!=""){
		msg ='The following fields are incorrect for <b>eid = ' + data.eid  +  '</b>:<br/><b>' + msg + '</b>';	
	}
	return msg;
}


function downloadCvs(rows,file_name){
	let csvContent = rows.map(e => e.join(",")).join("\n");	
	let link = document.createElement("a")
	let exportContent = '\uFEFF'
	let blob = new Blob([exportContent+csvContent],{
		type:'text/plain;charset=utrf-8'
	})
	link.id = "download-csv"
	link.setAttribute("href", URL.createObjectURL(blob))
	link.setAttribute('download', file_name + ".csv")
	document.body.appendChild(link)
	link.click()
	
}

function downloadCvsTemplate(){
	const rows=[];
	let row = [];
	header=["eid", "age", "height", "weight", "Waist_circumference", "Hip_circumference", "Whole_body_fat_mass", "Whole_body_fat_free_mass", "Trunk_fat_mass", "Trunk_fat_free_mass", "Basal_metabolic_rate", "Leg_fatfree_mass"];	
	rows.push(header);
	var file_name = "CsvTemplate";
	downloadCvs(rows,file_name);
}
function blockUI(msg){
	$('.prompt_text').html(msg);
    $('.mask').removeClass('hide');
}

$(function () {
  (function () {
   $('.prompt_sure,.prompt_cancel').click(function () {
    $('.mask').addClass('hide');
   })
  })();
 
 });