var Obj_Age;	
var Obj_Height;
var Obj_Weight;
var Obj_WC;
var Obj_HC;
var Obj_Whole_body_fat_mass;
var Obj_Whole_body_fat_free_mass;
var Obj_Trunk_fat_mass;
var Obj_Trunk_fat_free_mass;
var Obj_Leg_fatfree_mass;
var Obj_Basal_metabolic_rate;
var Objgender;
var sex = 1;//0是女性，1是男性
var result_info;
var result_span;


function init(){
	 Obj_Age="";	
	 Obj_Height="";
	 Obj_Weight="";
	 Obj_WC="";
	 Obj_HC="";
	 Obj_Whole_body_fat_mass="";
	 Obj_Whole_body_fat_free_mass="";
	 Obj_Trunk_fat_mass="";
	 Obj_Trunk_fat_free_mass="";
	 Obj_Leg_fatfree_mass="";
	 Obj_Basal_metabolic_rate="";
	 Objgender="";
	 sex = 1;
	 result_info="";
	 result_span="";
}
function checkForm1() {	
		if ($(Obj_Age).val()!=null && $(Obj_Age).val()!="" && $(Obj_Age).val()>=0 && $(Obj_Age).val()<=120 ) {
			$(Obj_Age).css("border", "");
		} else {
			$(Obj_Age).css("border", "1px solid red");
			$(Obj_Age).focus();
			return false;
		}
		
		if ($(Obj_Height).val()!=null && $(Obj_Height).val()!="" && $(Obj_Height).val()>=50 && $(Obj_Height).val()<=250 ) {
			$(Obj_Height).css("border", "");
		} else {
			$(Obj_Height).css("border", "1px solid red");
			$(Obj_Height).focus();
			return false;
		}
		
		if ($(Obj_Weight).val()!=null && $(Obj_Weight).val()!="" && $(Obj_Weight).val()>=20 && $(Obj_Weight).val()<=250 ) {
			$(Obj_Weight).css("border", "");
		} else {
			$(Obj_Weight).css("border", "1px solid red");
			$(Obj_Weight).focus();
			return false;
		}
		return true;
}
function checkForm2_isnull() {	
		if (($(Obj_WC).val()==null || $(Obj_WC).val()=="") || ($(Obj_HC).val()==null || $(Obj_HC).val()=="")) {
			return true;
		}
		return false;
}

function checkForm2_scope() {	
	if($(Obj_WC).val()!=null && $(Obj_WC).val()!=""){
		if ($(Obj_WC).val()>=15 && $(Obj_WC).val()<=250 ) {
			$(Obj_WC).css("border", "");
		} else {
			$(Obj_WC).css("border", "1px solid red");
			$(Obj_WC).focus();
			return false;
		}
	}
	if($(Obj_HC).val()!=null && $(Obj_HC).val()!=""){
		if($(Obj_HC).val()>=15 && $(Obj_HC).val()<=250 ) {
			$(Obj_HC).css("border", "");
		} else {
			$(Obj_HC).css("border", "1px solid red");
			$(Obj_HC).focus();
			return false;
		}	
	}
	return true;
}

function checkForm3_isnull() {	
	if ($(Obj_Whole_body_fat_mass).val()==null || $(Obj_Whole_body_fat_mass).val()=="" ||
	$(Obj_Whole_body_fat_free_mass).val()==null || $(Obj_Whole_body_fat_free_mass).val()=="" ||
	$(Obj_Trunk_fat_mass).val()==null || $(Obj_Trunk_fat_mass).val()=="" || 
	$(Obj_Trunk_fat_free_mass).val()==null || $(Obj_Trunk_fat_free_mass).val()=="" || 
	$(Obj_Leg_fatfree_mass).val()==null || $(Obj_Leg_fatfree_mass).val()=="" || 
	$(Obj_Basal_metabolic_rate).val()==null || $(Obj_Basal_metabolic_rate).val()==""){
		return true;
	}           
	return false;
}

function checkForm3_scope() {	
	if($(Obj_Whole_body_fat_mass).val()!=null && $(Obj_Whole_body_fat_mass).val()!=""){
		if($(Obj_Whole_body_fat_mass).val()>=0 && $(Obj_Whole_body_fat_mass).val()<=150 ) {
			$(Obj_Whole_body_fat_mass).css("border", "");
		} else {
			$(Obj_Whole_body_fat_mass).css("border", "1px solid red");
			$(Obj_Whole_body_fat_mass).focus();
			return false;
		}
	}
	if($(Obj_Whole_body_fat_free_mass).val()!=null && $(Obj_Whole_body_fat_free_mass).val()!=""){
		if($(Obj_Whole_body_fat_free_mass).val()>=0 && $(Obj_Whole_body_fat_free_mass).val()<=150 ) {
			$(Obj_Whole_body_fat_free_mass).css("border", "");
		} else {
			$(Obj_Whole_body_fat_free_mass).css("border", "1px solid red");
			$(Obj_Whole_body_fat_free_mass).focus();
			return false;
		}
	}
	if($(Obj_Trunk_fat_mass).val()!=null && $(Obj_Trunk_fat_mass).val()!=""){
		if($(Obj_Trunk_fat_mass).val()>=0 && $(Obj_Trunk_fat_mass).val()<=80 ) {
			$(Obj_Trunk_fat_mass).css("border", "");
		} else {
			$(Obj_Trunk_fat_mass).css("border", "1px solid red");
			$(Obj_Trunk_fat_mass).focus();
			return false;
		}
	}
	if($(Obj_Trunk_fat_free_mass).val()!=null && $(Obj_Trunk_fat_free_mass).val()!=""){
		if($(Obj_Trunk_fat_free_mass).val()>=0 && $(Obj_Trunk_fat_free_mass).val()<=80 ) {
			$(Obj_Trunk_fat_free_mass).css("border", "");
		} else {
			$(Obj_Trunk_fat_free_mass).css("border", "1px solid red");
			$(Obj_Trunk_fat_free_mass).focus();
			return false;
		}
	}
	if($(Obj_Leg_fatfree_mass).val()!=null && $(Obj_Leg_fatfree_mass).val()!=""){
		if($(Obj_Leg_fatfree_mass).val()>=0 && $(Obj_Leg_fatfree_mass).val()<=40 ) {
			$(Obj_Leg_fatfree_mass).css("border", "");
		} else {
			$(Obj_Leg_fatfree_mass).css("border", "1px solid red");
			$(Obj_Leg_fatfree_mass).focus();
			return false;
		}
	}
	if($(Obj_Basal_metabolic_rate).val()!=null && $(Obj_Basal_metabolic_rate).val()!=""){
		if($(Obj_Basal_metabolic_rate).val()>=500 && $(Obj_Basal_metabolic_rate).val()<=30000 ) {
			$(Obj_Basal_metabolic_rate).css("border", "");
		} else {
			$(Obj_Basal_metabolic_rate).css("border", "1px solid red");
			$(Obj_Basal_metabolic_rate).focus();
			return false;
		}
	}
	return true;
}

/** VAT compute **/
function compute_vat(sex,Model,Age,Height,Weight,WC,HC,Whole_body_fat_mass,Whole_body_fat_free_mass,Trunk_fat_mass,Trunk_fat_free_mass,Leg_fatfree_mass,Basal_metabolic_rate){
	var VAT = "";
	if(Model==1){
		// Male
		if(sex==1){
			VAT = Math.pow(3.662482 + (-0.01231925)*Height + (0.85214619)*Math.log(Weight) + (31658.99621899)* Math.pow(Height,-2) + (-92.22010100)* Math.pow(Math.log(Weight),-2) + (0.00218159)*Age*Math.log(Weight),2);
					
			$(result_info).html("按公式1记算:" + VAT);//.toFixed(3)
			$(result_span).fadeIn("slow");
		// Female
		}else if(sex==0){
			VAT = Math.pow(-2.071506+ (-0.00599053)*Height + (1.48042566)*Math.log(Weight)+ (-1155.41236559)*Math.pow(Age,-2) + (6179.19850049)*Math.pow(Height,-2)+ (60.39455514)*Math.pow(Height,-1) + (4.31435010)* Math.pow(Height,-0.5)+ (-0.04794854)*Math.pow(Height,0.5) + (-0.00000716)*Math.pow(Height,2)+ (-26.16828233)*Math.pow(Math.log(Weight),-2),2);
		}
	}else if(Model==2){
			// Male
			if(sex==1){
				VAT = Math.pow(12.44193+ (-0.00075998)*Height + (0.75110017)*Math.log(Weight)
				+ (20410.72706072)*Math.pow(Height,-2) + (-53.91258858)*Math.pow(Math.log(Weight),-2)
				+ (-0.01167444)*Math.pow(Math.log(Weight),-1) + (-0.00465062)*Math.pow(Math.log(Weight),-0.5)
				+ (-116.11240378)*Math.pow(Math.log(WC),-2) + (-0.21279078)*Math.pow(Height,0.5)
				+ (0.53552198)*Math.pow(Math.log(Weight),0.5) + (0.00004120)*Math.pow(Math.log(Weight),2)
				+ (-0.20562981)*Math.pow(Math.log(HC),2) + (0.00133643)*Age*Math.log(Weight),2);
			// Female
			}else if(sex==0){
				VAT = Math.pow(-2.349566+ (-0.00000094)*Height + (1.20227727)*Math.log(Weight)+ (1.85505101)*Math.log(WC) + (-1083.68576408)*Math.pow(Age,-2)+ (-11.00973494)*Math.pow(Math.log(Weight),-2) + (-32.06868861)*Math.pow(Math.log(HC),-2)+ (-0.00001672)*Math.pow(Age,2) + (-0.17344295)*Math.pow(Height,0.5)+ (-0.00001098)*Math.pow(Height,2) + (-0.20390734)*Math.pow(Math.log(HC),2),2);
				
				$(result_info).html("按公式2记算:" + VAT);
				$(result_span).fadeIn("slow");
			
			}
		
	}else if(Model==3){
		// Male
		if(sex==1){	
			VAT = Math.pow(7.02997 
			+ (-0.00709324)*Height + (0.70017640)*Math.log(Weight) 
			+ (0.40186130)*Math.log(WC) + (6698.75701943)*Math.pow(Height,-2) 
			+ (-13.48519743)*Math.pow(Math.log(Weight),-2) + (-0.00211944)*Math.pow(Math.log(Weight),-1) 
			+ (-0.33382834)*Math.pow(Math.log(Weight),-0.5) + (-65.78554806)*Math.pow(Math.log(WC),-2) 
			+ (-18.50852958)*Math.pow(Math.log(HC),-2) + (-0.03880041)*Math.pow(Height,0.5) 
			+ (-0.23583685)*Math.pow(Math.log(HC),2) + (-0.00002049)*Age*Height 
			+ (0.40155875)*Math.log(Whole_body_fat_mass) 
			+ (0.14272295)*Math.pow(Whole_body_fat_free_mass,0.5) 
			+ (0.00061089)*Age*Math.pow(Whole_body_fat_free_mass,0.5)
			+ (0.00057931)*Age*Math.pow(Trunk_fat_mass,0.5) 
			+ (0.00071243)*Height*Math.log(Whole_body_fat_mass) 
			+ (0.00058905)*Height*Math.pow(Trunk_fat_mass,0.5) 
			+ (-0.03711732)*Math.log(WC)*Math.log(Leg_fatfree_mass) 
			+ (-0.02433584)*Math.log(HC)*Math.pow(Trunk_fat_free_mass,0.5) 
			+ (-0.05168732)*Math.log(HC)*Math.log(Leg_fatfree_mass),2);
		// Female
		}else if(sex==0){
			VAT = Math.pow(9.133921 
				+ (-0.01101650)*Age + (-0.00368319)*Height 
				+ (1.30670313)*Math.log(Weight) + (0.98249140)*Math.log(WC) 
				+ (-1.19596331)*Math.log(HC) + (-641.71362305)*Math.pow(Age,-2) 
				+ (17.48705253)*Math.pow(Math.log(Weight),-2) + (77.66830534)*Math.pow(Math.log(WC),-2)
				+ (-186.57000789)*Math.pow(Math.log(HC),-2) + (-0.00000834)*Math.pow(Age,2)
				+ (-0.07279930)*Math.pow(Height,0.5) + (-0.00001142)*Math.pow(Height,2) 
				+ (0.03077904)*Math.pow(Math.log(Weight),2) + (0.00004728)*Math.pow(Math.log(WC),2) 
				+ (-3.18081213)*Math.pow(Math.log(HC),0.5) + (-0.16815866)*Math.pow(Math.log(HC),2) 
				+ (0.00213220)*Age*Math.log(Weight) + (0.00147845)*Height*Math.log(Weight) 
				+ (0.00250822)*Height*Math.log(WC) + (-0.00228209)*Height*Math.log(HC) 
				+ (0.22775430)*Math.log(Weight)*Math.log(WC) + (-0.12615820)*Math.log(Weight)*Math.log(HC) 
				+ (-0.95245764)*Math.log(Trunk_fat_free_mass) + (-1.07270784)*Math.log(Leg_fatfree_mass) 
				+ (0.00094248)*Age*Math.log(Whole_body_fat_mass) 
				+ (0.00087809)*Age*Math.log(Whole_body_fat_free_mass) 
				+ (0.00789404)*Age*Math.log(Leg_fatfree_mass) 
				+ (0.00217830)*Height*Math.log(Whole_body_fat_mass) 
				+ (0.00012014)*Height*Math.pow(Trunk_fat_mass,0.5) 
				+ (-0.00143644)*Height*Math.log(Trunk_fat_free_mass)
				+ (-0.00168733)*Height*Math.log(Leg_fatfree_mass) 
				+ (0.02279138)*Math.log(Weight)*Math.log(Whole_body_fat_mass) 
				+ (0.01664763)*Math.log(Weight)*Math.log(Whole_body_fat_free_mass) 
				+ (0.06974431)*Math.log(WC)*Math.log(Whole_body_fat_mass) 
				+ (0.05844917)*Math.log(WC)*Math.log(Whole_body_fat_free_mass) 
				+ (-0.10666286)*Math.log(HC)*Math.log(Whole_body_fat_mass) 
				+ (-0.01945750)*Math.log(HC)*Math.pow(Trunk_fat_mass,0.5) 
				+ (-0.00220984)*Math.log(HC)*Math.log(Trunk_fat_free_mass) 
				+ (-0.04479566)*Math.log(HC)*Math.log(Leg_fatfree_mass) 
				+ (0.64297158)*Math.log(Basal_metabolic_rate)
				+ (-0.00209414)*Age*Math.log(Basal_metabolic_rate) 
				+ (0.07788880)*Math.log(WC)*Math.log(Basal_metabolic_rate) 
				+ (-0.06688009)*Math.log(HC)*Math.log(Basal_metabolic_rate),2);
		}	
	}	
	return VAT.toFixed(3)
}

/** asat compute **/
function compute_asat(sex,Model,Age,Height,Weight,WC,HC,Whole_body_fat_mass,Whole_body_fat_free_mass,Trunk_fat_mass,Trunk_fat_free_mass,Leg_fatfree_mass,Basal_metabolic_rate){
	var ASAT="";
	if(Model==1){
		// 男
		if(sex==1){
			ASAT = Math.pow(-1.600245 
				+ (-0.01732529)*Height + (0.00001249)*Math.pow(Age,2) 
				+ (8615.15893324)*Math.pow(Height,-2) + (0.34231978)*Math.pow(Math.log(Weight),2),2);
		// 女
		}else if(sex==0){
			ASAT = Math.pow(-6.863189 
				+ (-0.00504269)*Height + (2.83247454)*Math.log(Weight) 
				+ (-1731.23757135)*Math.pow(Age,-2) + (30994.15228828)*Math.pow(Height,-2) 
				+ (51.25540440)*Math.pow(Height,-1) + (3.48785647)*Math.pow(Height,-0.5) 
				+ (-0.03651642)*Math.pow(Height,0.5) + (-0.00000475)*Math.pow(Height,2) 
				+ (-23.42375422)*Math.pow(Math.log(Weight),-2) + (-0.00342952)*Age*Math.log(Weight) 
				+ (0.00000953)*Height*Math.log(Weight),2);
		}
	}else if(Model==2){
		// 男
		if(sex==1){
			ASAT = Math.pow(-4.319574 
				+ (-0.01182057)*Height + (22.85771379)*Math.pow(Age,-2) 
				+ (5718.03927734)*Math.pow(Height,-2) + (0.03871454)*Math.pow(Math.log(Weight),2) 
				+ (0.06469308)*Math.pow(Math.log(HC),2) + (-0.00000673)*Age*Height 
				+ (-0.00007486)*Age*Math.log(WC) + (0.32626608)*Math.log(Weight)*Math.log(WC) 
				+ (0.00005808)*Math.log(Weight)*Math.log(HC),2);
			
		// 女
		}else if(sex==0){					
			ASAT = Math.pow(-9.606913 
				+ (0.01969332)*Age + (-0.05230054)*Height 
				+ (2.20329957)*Math.log(Weight) + (0.23891672)*Math.log(WC) 
				+ (1.49618937)*Math.log(HC) + (-1818.31848083)*Math.pow(Age,-2) 
				+ (76.58131537)*Math.pow(Height,-1) + (14.90984321)*Math.pow(Height,-0.5) 
				+ (-11.24844661)*Math.pow(Math.log(Weight),-2) + (-126.76316952)*Math.pow(Math.log(WC),-2)
				+ (-0.08935829)*Math.pow(Math.log(WC),-1) + (101.21358462)*Math.pow(Math.log(HC),-2)
				+ (-0.17441512)*Math.pow(Height,0.5) + (-0.00001561)*Math.pow(Height,2) 
				+ (-0.05219252)*Math.pow(Math.log(Weight),2) + (-0.84937027)*Math.pow(Math.log(WC),0.5) 
				+ (-0.18577581)*Math.pow(Math.log(WC),2) + (4.16093528)*Math.pow(Math.log(HC),0.5) 
				+ (0.09398676)*Math.pow(Math.log(HC),2) + (0.00018519)*Age*Height 
				+ (-0.01035996)*Age*Math.log(Weight) + (-0.01021754)*Age*Math.log(WC) 
				+ (0.00460725)*Age*Math.log(HC) + (0.00813113)*Height*Math.log(Weight) 
				+ (0.00291089)*Height*Math.log(WC) + (-0.00153259)*Height*Math.log(HC) 
				+ (-0.13276008)*Math.log(Weight)*Math.log(WC) + (-0.00033768)*Math.log(Weight)*Math.log(HC),2);		
		}
	}else if(Model==3){
		// 男
		if(sex==1){
			ASAT = Math.pow(15.15256+ (1.86296621)*Math.log(Weight) + (0.15820065)*Math.log(WC)+ (0.32684169)*Math.log(HC) + (382.22253266)*Math.pow(Age,-2)+ (2434.04486207)*Math.pow(Height,-2) + (0.25522104)*Math.pow(Height,-1)+ (1.98618198)*Math.pow(Height,-0.5) + (140.29463314)*Math.pow(Math.log(Weight),-2)+ (-6.22336621)*Math.pow(Math.log(Weight),-1) + (-11.97227349)*Math.pow(Math.log(Weight),-0.5)+ (-0.97312895)*Math.pow(Math.log(WC),-2) + (-10.09275511)*Math.pow(Math.log(WC),-1)+ (-9.79493154)*Math.pow(Math.log(WC),-0.5) + (260.63788989)*Math.pow(Math.log(HC),-2)+ (-28.87060175)*Math.pow(Math.log(HC),-1) + (-33.17382341)*Math.pow(Math.log(HC),-0.5)+ (-0.00000297)*Math.pow(Age,2) + (0.16725872)*Math.pow(Height,0.5)+ (0.00001389)*Math.pow(Height,2) + (5.94370253)*Math.pow(Math.log(Weight),0.5)+ (0.24783536)*Math.pow(Math.log(Weight),2) + (-3.91282773)*Math.pow(Math.log(WC),0.5)+ (0.03832099)*Math.pow(Math.log(WC),2) + (-3.77367960)*Math.pow(Math.log(HC),0.5)+ (0.34426826)*Math.pow(Math.log(HC),2) + (-0.00048580)*Age*Math.log(WC)+ (0.00197285)*Age*Math.log(HC) + (-0.00167404)*Height*Math.log(Weight)+ (-0.00061501)*Height*Math.log(WC) + (-0.00202989)*Height*Math.log(HC)+ (0.02027717)*Math.log(Weight)*Math.log(WC) + (0.03641423)*Math.log(Weight)*Math.log(HC)+ (0.00790617)*Math.log(WC)*Math.log(HC) + (-0.24220646)*Math.log(Whole_body_fat_mass)+ (-0.34744907)*Math.pow(Whole_body_fat_free_mass,0.5)+ (-0.09623795)*Math.pow(Trunk_fat_mass,0.5)+ (0.31543438)*Math.pow(Trunk_fat_free_mass,0.5)+ (0.32227545)*Math.log(Leg_fatfree_mass)+ (-0.00172102)*Age*Math.log(Whole_body_fat_mass)+ (-0.00093521)*Age*Math.pow(Whole_body_fat_free_mass,0.5)+ (-0.00218899)*Age*Math.pow(Trunk_fat_mass,0.5)+ (0.00236864)*Age*Math.pow(Trunk_fat_free_mass,0.5)+ (0.00309759)*Height*Math.log(Whole_body_fat_mass)+ (-0.00064402)*Height*Math.pow(Whole_body_fat_free_mass,0.5)+ (0.00080658)*Height*Math.log(Leg_fatfree_mass)+ (0.06900570)*Math.log(Weight)*Math.log(Whole_body_fat_mass)+ (-0.00004467)*Math.log(Weight)*Math.pow(Whole_body_fat_free_mass,0.5)+ (0.00343545)*Math.log(Weight)*Math.pow(Trunk_fat_mass,0.5)+ (0.05475464)*Math.log(Weight)*Math.log(Leg_fatfree_mass)+ (-0.02934157)*Math.log(WC)*Math.pow(Whole_body_fat_free_mass,0.5)+ (0.08616708)*Math.log(WC)*Math.log(Leg_fatfree_mass)+ (0.00126473)*Math.log(HC)*Math.log(Whole_body_fat_mass)+ (-0.04667013)*Math.log(HC)*Math.pow(Whole_body_fat_free_mass,0.5)+ (0.00137294)*Math.log(HC)*Math.pow(Trunk_fat_mass,0.5)+ (0.01439782)*Math.log(HC)*Math.pow(Trunk_fat_free_mass,0.5)+ (0.08090261)*Math.log(HC)*Math.log(Leg_fatfree_mass)+ (-2.18017930)*Math.log(Basal_metabolic_rate)+ (0.01927075)*Math.log(Weight)*Math.log(Basal_metabolic_rate)+ (0.00823156)*Math.log(WC)*Math.log(Basal_metabolic_rate)+ (0.01495300)*Math.log(HC)*Math.log(Basal_metabolic_rate),2);
		// 女
		}else if(sex==0){				
			ASAT = Math.pow(-5.125232 
				+ (-0.00428181)*Age + (-0.00315479)*Height 
				+ (2.19678017)*Math.log(Weight) + (0.07959460)*Math.log(WC) 
				+ (0.47734072)*Math.log(HC) + (-977.13304857)*Math.pow(Age,-2) 
				+ (5120.28211830)*Math.pow(Height,-2) + (90.29647806)*Math.pow(Height,-1) 
				+ (6.48753355)*Math.pow(Height,-0.5) + (48.79664357)*Math.pow(Math.log(Weight),-2) 
				+ (-1.90773968)*Math.pow(Math.log(Weight),-1) + (-4.59817308)*Math.pow(Math.log(Weight),-0.5) 
				+ (-46.67987521)*Math.pow(Math.log(WC),-2) + (88.37350327)*Math.pow(Math.log(HC),-2) 
				+ (-4.33228504)*Math.pow(Math.log(HC),-1) + (-9.66341971)*Math.pow(Math.log(HC),-0.5) 
				+ (-0.12365446)*Math.pow(Age,0.5) + (-0.00003349)*Math.pow(Age,2) 
				+ (-0.00000087)*Math.pow(Height,2) + (1.37259990)*Math.pow(Math.log(Weight),0.5) 
				+ (0.08369839)*Math.pow(Math.log(Weight),2) + (-0.98732038)*Math.pow(Math.log(WC),0.5) 
				+ (-0.02616763)*Math.pow(Math.log(WC),2) + (0.12872120)*Math.pow(Math.log(HC),2)
				+ (0.00006826)*Age*Height + (-0.00235066)*Age*Math.log(Weight) 
				+ (-0.00359040)*Age*Math.log(WC) + (0.00241921)*Age*Math.log(HC) 
				+ (0.00007149)*Height*Math.log(WC) + (-0.00073100)*Height*Math.log(HC) 
				+ (0.00782130)*Math.log(Weight)*Math.log(HC) + (0.15360916)*Math.log(Whole_body_fat_mass) 
				+ (-0.65755725)*Math.log(Whole_body_fat_free_mass) 
				+ (0.01198773)*Math.pow(Trunk_fat_mass,0.5) 
				+ (0.05676022)*Math.log(Trunk_fat_free_mass) 
				+ (-0.32857329)*Math.log(Leg_fatfree_mass) 
				+ (-0.00081278)*Age*Math.log(Whole_body_fat_mass) 
				+ (0.00264559)*Age*Math.log(Whole_body_fat_free_mass) 
				+ (-0.00191106)*Age*Math.pow(Trunk_fat_mass,0.5) 
				+ (0.00349934)*Age*Math.log(Trunk_fat_free_mass) 
				+ (0.00484027)*Age*Math.log(Leg_fatfree_mass) 
				+ (0.00442714)*Height*Math.log(Whole_body_fat_mass) 
				+ (-0.00336328)*Height*Math.log(Whole_body_fat_free_mass) 
				+ (0.00052768)*Height*Math.pow(Trunk_fat_mass,0.5) 
				+ (-0.00250042)*Height*Math.log(Leg_fatfree_mass) 
				+ (-0.01214216)*Math.log(Weight)*Math.log(Whole_body_fat_free_mass) 
				+ (-0.03215271)*Math.log(WC)*Math.log(Whole_body_fat_mass) 
				+ (-0.00507770)*Math.log(WC)*Math.pow(Trunk_fat_mass,0.5) 
				+ (0.03436870)*Math.log(WC)*Math.log(Trunk_fat_free_mass) 
				+ (0.01394573)*Math.log(WC)*Math.log(Leg_fatfree_mass) 
				+ (0.00586307)*Math.log(HC)*Math.log(Whole_body_fat_mass) 
				+ (0.00029453)*Math.log(HC)*Math.pow(Trunk_fat_mass,0.5) 
				+ (0.01202377)*Math.log(HC)*Math.log(Trunk_fat_free_mass) 
				+ (-0.00154612)*Age*Math.log(Basal_metabolic_rate) 
				+ (-0.00003724)*Height*Math.log(Basal_metabolic_rate) 
				+ (-0.01886643)*Math.log(Weight)*Math.log(Basal_metabolic_rate) 
				+ (-0.01421563)*Math.log(WC)*Math.log(Basal_metabolic_rate),2);
		}			
	}	
	return ASAT.toFixed(3);
}

/** ffmv compute **/
function compute_ffmv(sex,Model,Age,Height,Weight,WC,HC,Whole_body_fat_mass,Whole_body_fat_free_mass,Trunk_fat_mass,Trunk_fat_free_mass,Leg_fatfree_mass,Basal_metabolic_rate){	
	var FFMV = "";
	if(Model==1){
		// 男
		if(sex==1){
			FFMV = 7.491275 
				+ (-130.88578925)*Math.pow(Math.log(Weight),-2) + (-0.01131362)*Age*Math.log(Weight) 
				+ (0.01912165)*Height*Math.log(Weight)
		// 女
		}else if(sex==0){
			FFMV =  -5.07513 
				+ (0.23805757)*Math.log(Weight) + (2932.22159920)*Math.pow(Age,-2) 
				+ (-2.39452913)*Math.pow(Math.log(Weight),-2) + (0.00748727)*Math.pow(Math.log(Weight),2) 
				+ (0.01680202)*Height*Math.log(Weight);
		}
	}else if(Model==2){
		// 男
		if(sex==1){			
			FFMV = -1.504568 
				+ (6.51372332)*Math.log(Weight) + (-63.03104037)*Math.pow(Math.log(Weight),-2) 
				+ (-69.29213215)*Math.pow(Math.log(HC),-2) + (-0.84210863)*Math.pow(Math.log(WC),2) 
				+ (-0.00011026)*Age*Height + (-0.00343001)*Age*Math.log(Weight) 
				+ (0.01441484)*Height*Math.log(Weight);			
		// 女
		}else if(sex==0){
			FFMV = 91.06333 
				+ (0.05787241)*Age + (0.04896492)*Height 
				+ (2.57277996)*Math.log(Weight) + (-3.55174954)*Math.log(HC) 
				+ (11386.79794965)*Math.pow(Age,-2) + (-188.54780617)*Math.pow(Age,-1) 
				+ (-30.03350055)*Math.pow(Age,-0.5) + (9951.39220923)*Math.pow(Height,-2) 
				+ (8.94958497)*Math.pow(Math.log(Weight),-2) + (250.69753566)*Math.pow(Math.log(WC),-2) 
				+ (-4.18685609)*Math.pow(Math.log(WC),-1) + (-28.47606889)*Math.pow(Math.log(WC),-0.5) 
				+ (-570.13047317)*Math.pow(Math.log(HC),-2) + (30.12865809)*Math.pow(Math.log(HC),-0.5) 
				+ (0.49516190)*Math.pow(Age,0.5) + (-0.00019823)*Math.pow(Age,2) 
				+ (0.18977271)*Math.pow(Math.log(Weight),2) + (-5.67409822)*Math.pow(Math.log(WC),0.5) 
				+ (0.33665857)*Math.pow(Math.log(WC),2) + (-33.91881195)*Math.pow(Math.log(HC),0.5) 
				+ (-0.00010504)*Math.pow(Math.log(HC),2) + (-0.00060847)*Age*Height 
				+ (-0.02590472)*Age*Math.log(Weight) + (0.03219355)*Age*Math.log(WC) 
				+ (0.02619144)*Height*Math.log(Weight) + (-0.00244471)*Height*Math.log(WC) 
				+ (-0.01044044)*Height*Math.log(HC) + (0.06545691)*Math.log(Weight)*Math.log(WC) 
				+ (-0.27330009)*Math.log(Weight)*Math.log(HC);		
		}
	}else if(Model==3){		
		// 男
		if(sex==1){	
			FFMV = -57.8487 
				+ (0.00646522)*Age + (-0.00007982)*Height 
				+ (4.09733124)*Math.log(Weight) + (0.05051037)*Math.log(WC) 
				+ (-2800.16692492)*Math.pow(Age,-2) + (-31115.25782193)*Math.pow(Height,-2) 
				+ (-201.31059835)*Math.pow(Math.log(Weight),-2) + (-0.16711152)*Math.pow(Math.log(Weight),-1) 
				+ (2.41297944)*Math.pow(Math.log(Weight),-0.5) + (-355.06892022)*Math.pow(Math.log(WC),-2) 
				+ (43.46482303)*Math.pow(Math.log(WC),-1) + (48.04277236)*Math.pow(Math.log(WC),-0.5) 
				+ (-355.71283583)*Math.pow(Math.log(HC),-2) + (49.45085268)*Math.pow(Math.log(HC),-1) 
				+ (69.27245177)*Math.pow(Math.log(HC),-0.5) + (-0.04932116)*Math.pow(Age,0.5) 
				+ (-0.00010476)*Math.pow(Age,2) + (-1.34801183)*Math.pow(Height,0.5) 
				+ (-0.00004650)*Math.pow(Height,2) + (-13.14060130)*Math.pow(Math.log(Weight),0.5) 
				+ (-0.30454474)*Math.pow(Math.log(Weight),2) + (-0.00054404)*Math.pow(Math.log(WC),0.5) 
				+ (-0.66426337)*Math.pow(Math.log(WC),2) + (34.59497156)*Math.pow(Math.log(HC),0.5) 
				+ (-0.68357780)*Math.pow(Math.log(HC),2) + (-0.00005454)*Age*Height 
				+ (-0.02072489)*Age*Math.log(Weight) + (0.01169917)*Age*Math.log(WC) 
				+ (-0.00531533)*Age*Math.log(HC) + (0.02600417)*Height*Math.log(Weight) 
				+ (-0.00471516)*Height*Math.log(HC) + (-0.48446796)*Math.log(Weight)*Math.log(WC) 
				+ (-0.04041768)*Math.log(Weight)*Math.log(HC) + (1.62380515)*Math.log(Whole_body_fat_mass) 
				+ (3.87966838)*Math.pow(Whole_body_fat_free_mass,0.5) 
				+ (-0.02854392)*Math.pow(Trunk_fat_mass,0.5) 
				+ (-0.60376083)*Math.pow(Trunk_fat_free_mass,0.5) 
				+ (-0.03108634)*Math.log(Leg_fatfree_mass) 
				+ (-0.00729499)*Age*Math.log(Whole_body_fat_mass) 
				+ (-0.01532048)*Age*Math.pow(Whole_body_fat_free_mass,0.5) 
				+ (0.01172477)*Age*Math.pow(Trunk_fat_mass,0.5) 
				+ (-0.00803020)*Age*Math.pow(Trunk_fat_free_mass,0.5) 
				+ (-0.01137631)*Age*Math.log(Leg_fatfree_mass) 
				+ (0.00543426)*Height*Math.log(Whole_body_fat_mass) 
				+ (0.00171435)*Height*Math.pow(Whole_body_fat_free_mass,0.5) 
				+ (0.00333476)*Height*Math.pow(Trunk_fat_mass,0.5) 
				+ (-0.00302042)*Height*Math.pow(Trunk_fat_free_mass,0.5) 
				+ (-0.94309843)*Math.log(Weight)*Math.log(Whole_body_fat_mass) 
				+ (0.16229571)*Math.log(Weight)*Math.pow(Whole_body_fat_free_mass,0.5) 
				+ (-0.02423162)*Math.log(Weight)*Math.pow(Trunk_fat_mass,0.5) 
				+ (0.01327787)*Math.log(Weight)*Math.pow(Trunk_fat_free_mass,0.5) 
				+ (-0.34807456)*Math.log(Weight)*Math.log(Leg_fatfree_mass) 
				+ (0.08786295)*Math.log(WC)*Math.pow(Whole_body_fat_free_mass,0.5) 
				+ (0.01923180)*Math.log(WC)*Math.pow(Trunk_fat_mass,0.5) 
				+ (-0.53640042)*Math.log(WC)*Math.log(Leg_fatfree_mass) 
				+ (0.23079467)*Math.log(HC)*Math.pow(Whole_body_fat_free_mass,0.5) 
				+ (0.02302770)*Math.log(HC)*Math.pow(Trunk_fat_mass,0.5) 
				+ (-0.41888774)*Math.log(HC)*Math.log(Leg_fatfree_mass) 
				+ (1.17180275)*Math.log(Basal_metabolic_rate) 
				+ (0.02177507)*Age*Math.log(Basal_metabolic_rate) 
				+ (-0.00561935)*Height*Math.log(Basal_metabolic_rate) 
				+ (-0.02022501)*Math.log(Weight)*Math.log(Basal_metabolic_rate) 
				+ (-0.04606516)*Math.log(HC)*Math.log(Basal_metabolic_rate);
		// 女
		}else if(sex==0){	
			FFMV =  15.85311 
					+ (0.00983074)*Age + (-0.01819454)*Height 
					+ (-0.05319768)*Math.log(Weight) + (0.04743173)*Math.log(WC) 
					+ (-1.40870750)*Math.log(HC) + (3961.16614482)*Math.pow(Age,-2) 
					+ (-32.18580965)*Math.pow(Age,-1) + (-11.26092775)*Math.pow(Age,-0.5) 
					+ (3088.75957284)*Math.pow(Height,-2) + (-50.02896467)*Math.pow(Math.log(Weight),-2) 
					+ (-2.88829489)*Math.pow(Math.log(Weight),-1) + (-1.26441455)*Math.pow(Math.log(Weight),-0.5) 
					+ (82.07629505)*Math.pow(Math.log(WC),-2) + (-318.84555178)*Math.pow(Math.log(HC),-2) 
					+ (0.12304454)*Math.pow(Age,0.5) + (-0.00022461)*Math.pow(Age,2) 
					+ (-0.19094673)*Math.pow(Height,0.5) + (-0.00000202)*Math.pow(Height,2) 
					+ (-5.13508819)*Math.pow(Math.log(Weight),0.5) + (-0.00545332)*Math.pow(Math.log(Weight),2) 
					+ (-0.53901124)*Math.pow(Math.log(WC),0.5) + (0.08672144)*Math.pow(Math.log(WC),2) 
					+ (-16.08973284)*Math.pow(Math.log(HC),0.5) + (-0.00009923)*Math.pow(Math.log(HC),2) 
					+ (-0.00019853)*Age*Height + (-0.00641062)*Age*Math.log(Weight) 
					+ (0.01203717)*Age*Math.log(WC) + (0.01622720)*Height*Math.log(Weight) 
					+ (-0.00378962)*Height*Math.log(HC) + (-0.03450250)*Math.log(Weight)*Math.log(WC) 
					+ (-0.40685355)*Math.log(Weight)*Math.log(HC) + (2.16040440)*Math.log(Whole_body_fat_mass) 
					+ (13.12995693)*Math.log(Whole_body_fat_free_mass) 
					+ (-0.34214375)*Math.pow(Trunk_fat_mass,0.5) 
					+ (-2.51850722)*Math.log(Trunk_fat_free_mass) 
					+ (0.33146883)*Math.log(Leg_fatfree_mass) 
					+ (-0.01573826)*Age*Math.log(Whole_body_fat_free_mass) 
					+ (0.00518184)*Age*Math.pow(Trunk_fat_mass,0.5) 
					+ (-0.01499506)*Age*Math.log(Trunk_fat_free_mass) 
					+ (-0.07906345)*Age*Math.log(Leg_fatfree_mass) 
					+ (0.00058880)*Height*Math.log(Whole_body_fat_mass) 
					+ (0.00853399)*Height*Math.log(Whole_body_fat_free_mass) 
					+ (0.00140229)*Height*Math.pow(Trunk_fat_mass,0.5) 
					+ (-0.00322823)*Height*Math.log(Trunk_fat_free_mass) 
					+ (0.01480241)*Height*Math.log(Leg_fatfree_mass) 
					+ (-0.58680437)*Math.log(Weight)*Math.log(Whole_body_fat_mass) 
					+ (0.13373007)*Math.log(Weight)*Math.log(Whole_body_fat_free_mass) 
					+ (0.01541871)*Math.log(Weight)*Math.pow(Trunk_fat_mass,0.5)
					+ (0.02616922)*Math.log(Weight)*Math.log(Trunk_fat_free_mass) 
					+ (-0.02915431)*Math.log(Weight)*Math.log(Leg_fatfree_mass) 
					+ (0.11450942)*Math.log(WC)*Math.log(Whole_body_fat_mass) 
					+ (0.24438372)*Math.log(WC)*Math.log(Whole_body_fat_free_mass) 
					+ (0.06855358)*Math.log(WC)*Math.pow(Trunk_fat_mass,0.5) 
					+ (-0.17917785)*Math.log(WC)*Math.log(Trunk_fat_free_mass) 
					+ (-0.20934233)*Math.log(WC)*Math.log(Leg_fatfree_mass) 
					+ (-0.20478186)*Math.log(HC)*Math.log(Whole_body_fat_mass) 
					+ (0.11565552)*Math.log(HC)*Math.log(Whole_body_fat_free_mass) 
					+ (0.01279845)*Math.log(HC)*Math.pow(Trunk_fat_mass,0.5) 
					+ (-0.10810875)*Math.log(HC)*Math.log(Trunk_fat_free_mass) 
					+ (2.87302166)*Math.log(Basal_metabolic_rate) 
					+ (0.03006849)*Age*Math.log(Basal_metabolic_rate) 
					+ (-0.00533452)*Height*Math.log(Basal_metabolic_rate) 
					+ (-0.17257946)*Math.log(Weight)*Math.log(Basal_metabolic_rate) 
					+ (0.04498930)*Math.log(WC)*Math.log(Basal_metabolic_rate) 
					+ (-0.01710778)*Math.log(HC)*Math.log(Basal_metabolic_rate);
		}
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