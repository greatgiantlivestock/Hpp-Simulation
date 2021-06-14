// const recipes = document.querySelector('.recipeshome');
const recipes1 = document.querySelector('.recipeshome1');
const recipes2 = document.querySelector('.recipeshome2');
// const recipes3 = document.querySelector('.recipeshome3');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  // const menus = document.querySelectorAll('.side-menu');
  // M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// render recipe data
const renderRecipe2 = (data, id) => {
  const html = `
      <div id="id_nav" class="card-panel recipe white row" data-id="${id}">
        <div class="recipe-details">
            <div class="recipe-title">Total Cattle Cost Calculation (NIBT)</div>
            <div class="recipe-ingredients">Simulasi untuk menghitung target BEP price sebagai dasar pantauan harga jual (exclude BM 5%)</div>
            <div></div>
            <form>
            <table>
              <tr style="border:none;">
                <td style="width:48%">  
                  <div class="recipe-ingredients">
                    <label for="title">Rate (Rp/USD)</label>
                    <input style="font-weight: bold;" id="rate13" placeholder="Rate sesuai market" onkeyup="cal_all3()" step="any" type="number" value="${data.rate}" class="validate">
                  </div>
                </td>
                <td style="width:52%">
                  <div class="recipe-ingredients">
                    <label for="title">Purchase Price (USD/Kg)</label>
                    <input style="font-weight: bold;" id="purchase_price13" placeholder="Harga beli (USD)" onkeyup="cal_all3()" value="${data.purchase_price}" step="any" type="number" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td colspan="2">  
                  <div class="recipe-ingredients">
                    <label for="title">Cattle Weight (Kg/Head)</label>
                    <input style="font-weight: bold;" id="cattle_weight13" placeholder="Input berat awal import sapi" onkeyup="cal_all3()"  step="any" type="number" value="${data.cattle_weight}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Purchase Price all (Rp/Kg)</label>
                    <input id="purchase_price_all13" onkeyup="cal_all3()" disabled style="background-color:#3d9ceb;font-weight: bold;"  step="any" type="number" value="${data.purchase_price_all}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Cattle sold weight (Kg/Head)</label>
                    <input id="cattle_sold_weight13" onkeyup="cal_all3()" disabled style="background-color:#3d9ceb;font-weight: bold;"  step="any" type="number" value="${data.cattle_sold_weight}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Assumption DoF (Days)</label>
                    <input style="font-weight: bold;" id="dof13" placeholder="Hari proyeksi DOF" step="any" type="number" onkeyup="cal_all3()" value="${data.dof}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Assumption ADG (Kg/Days)</label>
                    <input style='font-weight: bold;' id="adg13" placeholder="Target ADG" step="any" type="number" onkeyup="cal_all3()" value="${data.adg}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Cattle Finish Good (Rp/Kg)</label>
                    <input id="cattle_purchase13" onkeyup="cal_all3()" disabled style="background-color:#3d9ceb;font-weight: bold;"  step="any" type="number" value="${data.cattle_purchase}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Direct Cost (Rp/Kg)</label>
                    <input id="direct_cost13CB"  step="any" type="number" disabled style="background-color:#3d9ceb;font-weight: bold;" value="${data.direct_costCB}" class="validate">
                    
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">OH HPP (Rp/Kg)</label>
                    <input id="direct_cost13"  step="any" type="number" disabled style="background-color:#3d9ceb;font-weight: bold;" value="${data.direct_cost}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Opex + interest (Rp/Kg)</label>
                    <input id="oh_interest13"  step="any" type="number" disabled style="background-color:#3d9ceb;font-weight: bold;" value="${data.oh_interest}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td colspan="2">
                <div class="recipe-ingredients-result">
                  <label style="font-size: 13px;font-weight: bold;">Contribution Margin (Rp/Kg)</label>
                  <input disabled style="background-color:#95ff4f;font-weight: bold;" id="cattle_cost13CB"  step="any" type="number" value="" class="validate">    
                </div> 
                <div class="recipe-ingredients-result">
                  <label style="font-size: 13px;font-weight: bold;">Gross Margin (Rp/Kg)</label>
                  <input disabled style="background-color:#95ff4f;font-weight: bold;" id="cattle_cost13GM"  step="any" type="number" value="" class="validate">    
                </div> 
                  <div class="recipe-ingredients-result">
                    <label style="font-size: 13px;font-weight: bold;">NIBT (Rp/Kg)</label>
                    <input disabled style="background-color:#95ff4f;font-weight: bold;" id="cattle_cost13"  step="any" type="number" value="" class="validate">    
                  </div> 
                </td>
              </tr>
            <table>
            <div class="center">
              <a style="border-radius:15px; margin-bottom:20px;" id="cal_btn3" class="btn-small btn-large update-btn" data-id="${id}">
                Calculate
              </a>
            </div>
            </form> 
            <div >
              Cost Reference :
                <i class="right material-icons sidenav-trigger" data-target="side-form">settings</i>
              <table>
                <th>Cost Calculation</th>
                <th>
                  <div style="float:right;">
                    Rp/hd/day
                  </div>
                </th>
                <th><div style="float:right;">xDoF</div></th>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>Feed Cost</td>
                  <td>
                    <div style="float:right;">
                      <label id="feed_cost3" style="display:none;font-size: 13px;"></label>
                      <label id="feed_cost13" style="font-size: 13px;"></label>
                    </div>  
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stfeed_cost3" onchange="cal_all3()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stfeed_cost13" style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>Med Cost</td>
                  <td>
                    <div style="float:right;">
                      <label id="med_cost3" style="display:none;font-size: 13px;"></label>
                      <label id="med_cost13" style="font-size: 13px;"></label>
                    </div>
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stmed_cost3" onchange="cal_all3()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stmed_cost13"  style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>Labour Cost</td>
                  <td>
                    <div style="float:right;">
                      <label id="labour_cost3" style="display:none;font-size: 13px;"></label>
                      <label id="labour_cost13" style="font-size: 13px;"></label>
                    </div>
                  </td>
                  <td>
                  <div style="float:right;">
                    <label id="stlabour_cost3" onchange="cal_all3()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                    <label id="stlabour_cost13"  style="font-size: 13px;font-weight: bold;"></label>
                  </div>
                  </td>
                </tr>
                <tr class="recipe-ingredients-result1"> 
                  <td>Foh</td>
                  <td>
                  <div style="float:right;">
                    <label id="foh3" style="display:none;font-size: 13px;"></label>
                    <label id="foh113" style="font-size: 13px;"></label>
                  </div>
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stfoh3" onchange="cal_all3()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stfoh13"  style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td colspan="2">Total</td>
                  <td>
                    <div style="float:right;">
                      <label id="sttot3" onchange="cal_all3()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="sttot13"  style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                    <div style="float:right;">
                      <label id="sttot3CB" onchange="cal_all3()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>OPEX + Interest</td>
                  <td>
                    <div style="float:right;">
                      <label id="opex_int3" style="display:none;font-size: 13px;"></label>
                      <label id="opex_int13" style="font-size: 13px;"></label>
                    </div>
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stopex_int3" onchange="cal_all3()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stopex_int13" right style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
        </div>
      </div>
  `;
  recipes2.innerHTML += html;

  var stfeed_cost = Number(data.feed_cost)*Number(document.getElementById('dof13').value);
  var stmed_cost = Number(data.med_cost)*Number(document.getElementById('dof13').value);
  var stlabour_cost = Number(data.labour_cost)*Number(document.getElementById('dof13').value);
  var stfoh = Number(data.foh)*Number(document.getElementById('dof13').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var sttotCB = stfeed_cost+stmed_cost+stlabour_cost;
  var stopex_int = Number(data.opex_int)*Number(document.getElementById('dof13').value);
  document.getElementById('feed_cost3').innerHTML = Math.ceil(data.feed_cost);
  document.getElementById('med_cost3').innerHTML = Math.ceil(data.med_cost);
  document.getElementById('labour_cost3').innerHTML = Math.ceil(data.labour_cost);
  document.getElementById('foh3').innerHTML = Math.ceil(data.foh);
  document.getElementById('opex_int3').innerHTML = Math.ceil(data.opex_int);
  document.getElementById('feed_cost13').innerHTML = Math.ceil(data.feed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('med_cost13').innerHTML = Math.ceil(data.med_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('labour_cost13').innerHTML = Math.ceil(data.labour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('foh113').innerHTML = Math.ceil(data.foh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('opex_int13').innerHTML = Math.ceil(data.opex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('btn_update').value = id;

  document.getElementById('feed1').value = data.feed_cost;
  document.getElementById('med1').value = data.med_cost;
  document.getElementById('labour1').value = data.labour_cost;
  document.getElementById('foh1').value = data.foh;
  document.getElementById('opex1').value = data.opex_int;

  document.getElementById('stfeed_cost3').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost13').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost3').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost13').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost3').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost13').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh3').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh13').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot3').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot13').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot3CB').innerHTML = Math.ceil(sttotCB);
  document.getElementById('stopex_int3').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int13').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // update a recipe
  const updatreCalContainer2 = document.querySelector('.recipeshome2');
  if(updatreCalContainer2){
    var input = document.getElementById('adg13');
    input.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('cal_btn3').click();
        document.getElementById("cattle_cost13").disabled = false;
        document.getElementById("cattle_cost13").readOnly = true;
        document.getElementById('cattle_cost13').focus();
        document.getElementById("cattle_cost13").disabled = true;
        // document.getElementById('cal_btn3').click();
        document.getElementById("cattle_cost13GM").disabled = false;
        document.getElementById("cattle_cost13GM").readOnly = true;
        document.getElementById('cattle_cost13GM').focus();
        document.getElementById("cattle_cost13GM").disabled = true;
        document.getElementById("cattle_cost13CB").disabled = false;
        document.getElementById("cattle_cost13CB").readOnly = true;
        document.getElementById('cattle_cost13CB').focus();
        document.getElementById("cattle_cost13CB").disabled = true;
      }
    });

    updatreCalContainer2.addEventListener('click', evt => {
      if(evt.target.tagName === 'A'){
        cal_all3();
        const id = evt.target.getAttribute('data-id');
        var val_cattle_puchase = Number(document.getElementById('cattle_purchase13').value);
        var val_direc_cost = Number(document.getElementById('direct_cost13').value);
        var val_direc_costCB = Number(document.getElementById('direct_cost13CB').value);
        var val_oh_interest = Number(document.getElementById('oh_interest13').value);
        var nilai_cattle_cost1 = val_cattle_puchase+val_direc_cost+val_oh_interest;
        var nilai_cattle_cost1GM = val_cattle_puchase+val_direc_cost;
        var nilai_cattle_cost1CB = val_cattle_puchase+val_direc_costCB;
        document.getElementById('cattle_cost13').value = Math.ceil(nilai_cattle_cost1);
        document.getElementById('cattle_cost13GM').value = Math.ceil(nilai_cattle_cost1GM);
        document.getElementById('cattle_cost13CB').value = Math.ceil(nilai_cattle_cost1CB);
      }
    });
  }
};

// update recipe data
const updateRenderRecipe2 = (data, id) => {
  document.getElementById('feed_cost3').innerHTML = Math.ceil(data.feed_cost);
  document.getElementById('med_cost3').innerHTML = Math.ceil(data.med_cost);
  document.getElementById('labour_cost3').innerHTML = Math.ceil(data.labour_cost);
  document.getElementById('foh3').innerHTML = Math.ceil(data.foh);
  document.getElementById('opex_int3').innerHTML = Math.ceil(data.opex_int);
  document.getElementById('feed_cost13').innerHTML = Math.ceil(data.feed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('med_cost13').innerHTML = Math.ceil(data.med_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('labour_cost13').innerHTML = Math.ceil(data.labour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('foh113').innerHTML = Math.ceil(data.foh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('opex_int13').innerHTML = Math.ceil(data.opex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  var stfeed_cost = Number(data.feed_cost)*Number(document.getElementById('dof13').value);
  var stmed_cost = Number(data.med_cost)*Number(document.getElementById('dof13').value);
  var stlabour_cost = Number(data.labour_cost)*Number(document.getElementById('dof13').value);
  var stfoh = Number(data.foh)*Number(document.getElementById('dof13').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var sttotCB = stfeed_cost+stmed_cost+stlabour_cost;
  var stopex_int = Number(data.opex_int)*Number(document.getElementById('dof13').value);

  document.getElementById('stfeed_cost3').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost13').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost3').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost13').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost3').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost13').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh3').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh13').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot3').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot13').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot3CB').innerHTML = Math.ceil(sttotCB);
  document.getElementById('stopex_int3').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int13').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  var val_dof = Number(document.getElementById('dof13').value);
  var val_cattle_weight = Number(document.getElementById('cattle_weight13').value);
  var val_adg = Number(document.getElementById('adg13').value);
  var val_rate = Number(document.getElementById('rate13').value);
  var val_purchase_price = Number(document.getElementById('purchase_price13').value);
  var val_cattle_sold_weight = val_cattle_weight+(val_dof*val_adg);
  var val_purchase_price_all = (val_rate*val_purchase_price)+700;
  var val_cattle_purchase = val_purchase_price_all*val_cattle_weight/val_cattle_sold_weight;
  

  document.getElementById('purchase_price_all13').value = Math.ceil(val_purchase_price_all);
  document.getElementById('cattle_sold_weight13').value = Math.ceil(val_cattle_sold_weight);
  document.getElementById('cattle_purchase13').value = Math.ceil(val_cattle_purchase);
  document.getElementById('direct_cost13').value = Math.ceil(sttot/val_cattle_sold_weight);
  document.getElementById('direct_cost13CB').value = Math.ceil(sttotCB/val_cattle_sold_weight);
  document.getElementById('oh_interest13').value = Math.ceil(stopex_int/val_cattle_sold_weight);
  document.getElementById('cattle_cost13').value = "";
  document.getElementById('cattle_cost13GM').value = "";
  document.getElementById('cattle_cost13CB').value = "";
};

function cal_all3(){
  console.log("OK");
  var val_dof = Number(document.getElementById('dof13').value);
  var val_cattle_weight = Number(document.getElementById('cattle_weight13').value);
  var val_adg = Number(document.getElementById('adg13').value);
  var val_rate = Number(document.getElementById('rate13').value);
  var val_purchase_price = Number(document.getElementById('purchase_price13').value);
  var val_cattle_sold_weight = val_cattle_weight+(val_dof*val_adg);
  var val_purchase_price_all = (val_rate*val_purchase_price)+700;
  var val_cattle_purchase = val_purchase_price_all*val_cattle_weight/val_cattle_sold_weight;
  
  var stfeed_cost = Number(document.getElementById('feed_cost3').textContent)*Number(document.getElementById('dof13').value);
  var stmed_cost = Number(document.getElementById('med_cost3').textContent)*Number(document.getElementById('dof13').value);
  var stlabour_cost = Number(document.getElementById('labour_cost3').textContent)*Number(document.getElementById('dof13').value);
  var stfoh = Number(document.getElementById('foh3').textContent)*Number(document.getElementById('dof13').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var sttotCB = stfeed_cost+stmed_cost+stlabour_cost;
  var stopex_int = Number(document.getElementById('opex_int3').textContent)*Number(document.getElementById('dof13').value);
  document.getElementById('stfeed_cost3').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost13').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost3').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost13').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost3').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost13').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh3').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh13').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot3').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot13').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot3CB').innerHTML = Math.ceil(sttotCB);
  document.getElementById('stopex_int3').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int13').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  var val_sttot = Number(document.getElementById('sttot3').textContent);
  var val_sttotCB = Number(document.getElementById('sttot3CB').textContent);
  var val_stopex_int = Number(document.getElementById('stopex_int3').textContent);
  document.getElementById('purchase_price_all13').value = Math.ceil(val_purchase_price_all);
  document.getElementById('cattle_sold_weight13').value = Math.ceil(val_cattle_sold_weight);
  document.getElementById('cattle_purchase13').value = Math.ceil(val_cattle_purchase);
  document.getElementById('direct_cost13').value = Math.ceil(val_sttot/val_cattle_sold_weight);
  document.getElementById('direct_cost13CB').value = Math.ceil(val_sttotCB/val_cattle_sold_weight);
  document.getElementById('oh_interest13').value = Math.ceil(val_stopex_int/val_cattle_sold_weight);
  document.getElementById('cattle_cost13').value = "";
  document.getElementById('cattle_cost13GM').value = "";
  document.getElementById('cattle_cost13CB').value = "";
}

// render recipe data
const renderRecipe1 = (data, id) => {
  const html = `
      <div id="id_nav" class="card-panel recipe white row" data-id="${id}">
        <div class="recipe-details">
            <div class="recipe-title">Purchase Price Calculation</div>
            <div class="recipe-ingredients">Simulasi untuk menghitung target harga USD/Kg pembelian import sapi dengan asumsi BEP price</div>
            <div></div>
            <form>
            <table>
              <tr style="border:none;">
                <td style="width:48%">  
                  <div class="recipe-ingredients">
                    <label for="title">Rate (Rp/USD)</label>
                    <input style="font-weight: bold;" id="rate12" onkeyup="cal_all2()" placeholder="Rate sesuai market" step="any" type="number" value="${data.rate}" class="validate">
                  </div>
                </td>
                <td style="width:52%">
                  <div class="recipe-ingredients">
                    <label for="title">Cattle Weight (Kg/Head)</label>
                    <input style="font-weight: bold;" id="cattle_weight12" onkeyup="cal_all2()" placeholder="Berat awal import sapi" step="any" type="number" value="${data.cattle_weight}" class="validate">
                  </div>  
                </td>
              </tr>
              <tr style="border:none;">
                <td colspan="2">  
                  <div class="recipe-ingredients-result">
                    <label style="font-size: 13px;">Total Cattle Cost (Rp/Kg)</label>
                    <input style="font-weight: bold;" id="cattle_cost12" onkeyup="cal_all2()" placeholder="Target BEP price sebelum target margin" step="any" type="number" value="${data.cattle_cost}" class="validate">
                  </div> 
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Purchase Price all (Rp/Kg)</label>
                    <input id="purchase_price_all12" onkeyup="cal_all2()" disabled style="background-color:#3d9ceb;font-weight: bold;"  step="any" type="number" value="${data.purchase_price_all}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Cattle sold weight (Kg/Head)</label>
                    <input disabled style="background-color:#3d9ceb;font-weight: bold;" id="cattle_sold_weight12" onkeyup="cal_all2()" placeholder="Berat jual sapi" step="any" type="number" value="${data.cattle_sold_weight}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Assumption DoF (Days)</label>
                    <input style="font-weight: bold;" id="dof12"  step="any" type="number" onkeyup="cal_all2()" value="${data.dof}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Assumption ADG (Kg/Day)</label>
                    <input style="font-weight: bold;" id="adg12" placeholder="Target ADG" step="any" type="number" onkeyup="cal_all2()" value="${data.adg}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td colspan="2">
                  <div class="recipe-ingredients">
                    <label for="title">Cattle Finish Good (Rp/Kg)</label>
                    <input id="cattle_purchase12" onkeyup="cal_all2()" disabled style="background-color:#3d9ceb;font-weight: bold;"  step="any" type="number" value="${data.cattle_purchase}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Direct Cost (Rp/Kg)</label>
                    <input id="direct_cost12" onkeyup="cal_all2()" step="any" type="number" disabled style="background-color:#3d9ceb;font-weight: bold;" value="${data.direct_cost}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">OH + interest (Rp/Kg)</label>
                    <input id="oh_interest12" onkeyup="cal_all2()" step="any" type="number" disabled style="background-color:#3d9ceb;font-weight: bold;" value="${data.oh_interest}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td colspan="2">
                  <div class="recipe-ingredients">
                    <label for="title" style="font-weight: bold;">Purchase Price (USD/Kg)</label>
                    <input disabled style="background-color: #95ff4f;font-weight: bold;" id="purchase_price12" onkeyup="cal_all2()" value=""  step="any" type="number" class="validate">
                  </div>
                </td>
              </tr>
            <table>
            <div class="center">
              <a style="border-radius:15px; margin-bottom:20px;" id="cal_btn2" class="btn-small btn-large update-btn" data-id="">
                Calculate
              </a>
            </div>
            </form> 
            <div >
              Cost Reference :
                <i class="right material-icons sidenav-trigger" data-target="side-form">settings</i>
              <table>
                <th>Cost Calculation</th>
                <th>
                  <div style="float:right;">
                    Rp/hd/day
                  </div>
                </th>
                <th><div style="float:right;">xDoF</div></th>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>Feed Cost</td>
                  <td>
                    <div style="float:right;">
                      <label id="feed_cost2" style="display:none;font-size: 13px;"></label>
                      <label id="feed_cost12" style="font-size: 13px;"></label>
                    </div>  
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stfeed_cost2" onchange="cal_all2()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stfeed_cost12" style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>Med Cost</td>
                  <td>
                    <div style="float:right;">
                      <label id="med_cost2" style="display:none;font-size: 13px;"></label>
                      <label id="med_cost12" style="font-size: 13px;"></label>
                    </div>
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stmed_cost2" onchange="cal_all2()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stmed_cost12"  style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>Labour Cost</td>
                  <td>
                    <div style="float:right;">
                      <label id="labour_cost2" style="display:none;font-size: 13px;"></label>
                      <label id="labour_cost12" style="font-size: 13px;"></label>
                    </div>
                  </td>
                  <td>
                  <div style="float:right;">
                    <label id="stlabour_cost2" onchange="cal_all2()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                    <label id="stlabour_cost12"  style="font-size: 13px;font-weight: bold;"></label>
                  </div>
                  </td>
                </tr>
                <tr class="recipe-ingredients-result1"> 
                  <td>Foh</td>
                  <td>
                  <div style="float:right;">
                    <label id="foh2" style="display:none;font-size: 13px;"></label>
                    <label id="foh112" style="font-size: 13px;"></label>
                  </div>
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stfoh2" onchange="cal_all2()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stfoh12"  style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td colspan="2">Total</td>
                  <td>
                    <div style="float:right;">
                      <label id="sttot2" onchange="cal_all2()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="sttot12"  style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>OPEX + Interest</td>
                  <td>
                    <div style="float:right;">
                      <label id="opex_int2" style="display:none;font-size: 13px;"></label>
                      <label id="opex_int12" style="font-size: 13px;"></label>
                    </div>
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stopex_int2" onchange="cal_all2()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stopex_int12" right style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
        </div>
      </div>
  `;
  recipes1.innerHTML += html;

  var stfeed_cost = Number(data.feed_cost)*Number(document.getElementById('dof12').value);
  var stmed_cost = Number(data.med_cost)*Number(document.getElementById('dof12').value);
  var stlabour_cost = Number(data.labour_cost)*Number(document.getElementById('dof12').value);
  var stfoh = Number(data.foh)*Number(document.getElementById('dof12').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var stopex_int = Number(data.opex_int)*Number(document.getElementById('dof12').value);
  var weighGain = Number(document.getElementById('dof12').value)*Number(document.getElementById('adg12').value);

  document.getElementById('cattle_sold_weight12').innerHTML = Math.ceil(weighGain+document.getElementById('cattle_weight12').value);
  document.getElementById('feed_cost2').innerHTML = Math.ceil(data.feed_cost);
  document.getElementById('med_cost2').innerHTML = Math.ceil(data.med_cost);
  document.getElementById('labour_cost2').innerHTML = Math.ceil(data.labour_cost);
  document.getElementById('foh2').innerHTML = Math.ceil(data.foh);
  document.getElementById('opex_int2').innerHTML = Math.ceil(data.opex_int);
  document.getElementById('feed_cost12').innerHTML = Math.ceil(data.feed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('med_cost12').innerHTML = Math.ceil(data.med_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('labour_cost12').innerHTML = Math.ceil(data.labour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('foh112').innerHTML = Math.ceil(data.foh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('opex_int12').innerHTML = Math.ceil(data.opex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('btn_update').value = id;

  document.getElementById('feed1').value = data.feed_cost;
  document.getElementById('med1').value = data.med_cost;
  document.getElementById('labour1').value = data.labour_cost;
  document.getElementById('foh1').value = data.foh;
  document.getElementById('opex1').value = data.opex_int;

  document.getElementById('stfeed_cost2').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost12').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost2').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost12').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost2').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost12').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh2').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh12').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot2').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot12').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stopex_int2').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int12').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // update a recipe
  const updatreCalContainer1 = document.querySelector('.recipeshome1');
  if(updatreCalContainer1){
    var input = document.getElementById('adg12');
    input.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('cal_btn2').click();
        document.getElementById("purchase_price12").disabled = false;
        document.getElementById("purchase_price12").readOnly = true;
        document.getElementById('purchase_price12').focus();
        document.getElementById("purchase_price12").disabled = true;
      }
    });

    updatreCalContainer1.addEventListener('click', evt => {
      if(evt.target.tagName === 'A'){
        cal_all2();
        var val_purchase_price_all = Number(document.getElementById('purchase_price_all12').value);
        var val_rate = Number(document.getElementById('rate12').value);
        // var nilai_purchase_price = (val_purchase_price_all-700)/(val_rate*1.05);
        var nilai_purchase_price = (val_purchase_price_all)/(val_rate);
        document.getElementById('purchase_price12').value = (nilai_purchase_price).toFixed(2);
      }
    });
  }
};

// update recipe data
const updateRenderRecipe1 = (data, id) => {
  document.getElementById('feed_cost2').innerHTML = Math.ceil(data.feed_cost);
  document.getElementById('med_cost2').innerHTML = Math.ceil(data.med_cost);
  document.getElementById('labour_cost2').innerHTML = Math.ceil(data.labour_cost);
  document.getElementById('foh2').innerHTML = Math.ceil(data.foh);
  document.getElementById('opex_int2').innerHTML = Math.ceil(data.opex_int);
  document.getElementById('feed_cost12').innerHTML = Math.ceil(data.feed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('med_cost12').innerHTML = Math.ceil(data.med_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('labour_cost12').innerHTML = Math.ceil(data.labour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('foh112').innerHTML = Math.ceil(data.foh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('opex_int12').innerHTML = Math.ceil(data.opex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  var weighGain = Number(document.getElementById('dof12').value)*Number(document.getElementById('adg12').value);
  document.getElementById('cattle_sold_weight12').innerHTML = Math.ceil(weighGain+document.getElementById('cattle_weight12').value);
  var val_cattle_sold_weight = document.getElementById('cattle_sold_weight12').value;
  var val_cattle_weight = document.getElementById('cattle_weight12').value;
  var val_adg = document.getElementById('adg12').value;
  // var val_dof = (val_cattle_sold_weight-val_cattle_weight)/val_adg;
  // document.getElementById('dof12').value = val_dof;

  var stfeed_cost = Number(data.feed_cost)*Number(document.getElementById('dof12').value);
  var stmed_cost = Number(data.med_cost)*Number(document.getElementById('dof12').value);
  var stlabour_cost = Number(data.labour_cost)*Number(document.getElementById('dof12').value);
  var stfoh = Number(data.foh)*Number(document.getElementById('dof12').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var stopex_int = Number(data.opex_int)*Number(document.getElementById('dof12').value);

  document.getElementById('stfeed_cost2').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost12').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost2').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost12').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost2').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost12').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh2').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh12').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot2').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot12').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stopex_int2').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int12').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  
  // document.getElementById('cattle_sold_weight12').innerHTML = Math.ceil(weighGain+document.getElementById('cattle_weight12').value);
  // var val_cattle_sold_weight = Number(document.getElementById('cattle_sold_weight12').value);
  document.getElementById('direct_cost12').value = Math.ceil(sttot/val_cattle_sold_weight);
  document.getElementById('oh_interest12').value = Math.ceil(stopex_int/val_cattle_sold_weight);
  var val_cattle_purchase =document.getElementById('cattle_cost12').value - document.getElementById('oh_interest12').value - document.getElementById('direct_cost12').value;
  document.getElementById('cattle_purchase12').value = Math.ceil(val_cattle_purchase);
  
  var val_purchase_price_all = (document.getElementById('cattle_purchase12').value*val_cattle_sold_weight)/val_cattle_weight;
  document.getElementById('purchase_price_all12').value = val_purchase_price_all;
  document.getElementById('purchase_price12').value = "";
};

function cal_all2(){
  console.log("OK Call 2");
  var weighGain = Number(document.getElementById('dof12').value)*Number(document.getElementById('adg12').value);
  console.log("cattle sold weight :"+Math.ceil(weighGain+Number(document.getElementById('cattle_weight12').value)));
  document.getElementById('cattle_sold_weight12').value = Math.ceil(weighGain+Number(document.getElementById('cattle_weight12').value));
  var val_cattle_sold_weight = Number(document.getElementById('cattle_sold_weight12').value);
  console.log("Cattle Sold Weight value :"+val_cattle_sold_weight);
  var val_cattle_weight = Number(document.getElementById('cattle_weight12').value);
  var val_adg = Number(document.getElementById('adg12').value);
  // document.getElementById('dof12').value = Number((val_cattle_sold_weight/val_adg)-(val_cattle_weight/val_adg)).toFixed(2);

  var stfeed_cost = Number(document.getElementById('feed_cost2').textContent)*Number(document.getElementById('dof12').value);
  var stmed_cost = Number(document.getElementById('med_cost2').textContent)*Number(document.getElementById('dof12').value);
  var stlabour_cost = Number(document.getElementById('labour_cost2').textContent)*Number(document.getElementById('dof12').value);
  var stfoh = Number(document.getElementById('foh2').textContent)*Number(document.getElementById('dof12').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var stopex_int = Number(document.getElementById('opex_int2').textContent)*Number(document.getElementById('dof12').value);

  document.getElementById('stfeed_cost2').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost12').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost2').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost12').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost2').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost12').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh2').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh12').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot2').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot12').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stopex_int2').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int12').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  
  // document.getElementById('cattle_sold_weight12').innerHTML = Math.ceil(weighGain+document.getElementById('cattle_weight12').value);
  // var val_cattle_sold_weight = Number(document.getElementById('cattle_sold_weight12').value);
  document.getElementById('direct_cost12').value = Math.ceil(sttot/val_cattle_sold_weight);
  document.getElementById('oh_interest12').value = Math.ceil(stopex_int/val_cattle_sold_weight);
  var val_cattle_purchase =Number(document.getElementById('cattle_cost12').value) - Number(document.getElementById('oh_interest12').value) - Number(document.getElementById('direct_cost12').value);
  document.getElementById('cattle_purchase12').value = Math.ceil(val_cattle_purchase);
  
  var val_purchase_price_all = (Number(document.getElementById('cattle_purchase12').value)*val_cattle_sold_weight)/val_cattle_weight;
  document.getElementById('purchase_price_all12').value = val_purchase_price_all.toFixed(2);
  document.getElementById('purchase_price12').value = "";
}

//remove recipe from
const removeRecipe = (id) => {
  const recipe = document.querySelector(`.recipe[data-id=${id}]`)
  recipe.remove();
}