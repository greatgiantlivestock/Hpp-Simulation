const recipes = document.querySelector('.recipeshome');
const recipes1 = document.querySelector('.recipeshome1');
const recipes2 = document.querySelector('.recipeshome2');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
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
const renderRecipe = (data, id) => {
  const html = `
      <div id="id_nav" class="card-panel recipe white row" data-id="${id}">
        <div class="recipe-details">
            <div class="recipe-title">Total Cattle Cost Calculation</div>
            <div></div>
            <form>
            <table>
              <tr style="border:none;">
                <td style="width:65%">  
                  <div class="recipe-ingredients">
                    <label for="title">Rate</label>
                    <input id="rate1" onkeyup="cal_all()" type="text" value="${data.rate}" class="validate">
                  </div>
                </td>
                <td style="width:35%">
                  <div class="recipe-ingredients">
                    <label for="title">Purchase Price</label>
                    <input id="purchase_price1" onkeyup="cal_all()" value="${data.purchase_price}" type="text" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td colspan="2">  
                  <div class="recipe-ingredients">
                    <label for="title">Cattle Weight</label>
                    <input id="cattle_weight1" onkeyup="cal_all()" type="number" value="${data.cattle_weight}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Purchase Price (all)</label>
                    <input id="purchase_price_all1" onkeyup="cal_all()" disabled style="background-color:#f2f2f2;" type="number" value="${data.purchase_price_all}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Cattle sold weight</label>
                    <input id="cattle_sold_weight1" onkeyup="cal_all()" disabled style="background-color:#f2f2f2;" type="number" value="${data.cattle_sold_weight}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Assumption DoF</label>
                    <input id="dof1" type="number" onkeyup="cal_all()" value="${data.dof}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Assumption ADG</label>
                    <input id="adg1" type="number" onkeyup="cal_all()" value="${data.adg}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td colspan="2">
                  <div class="recipe-ingredients">
                    <label for="title">Cattle Purchase</label>
                    <input id="cattle_purchase1" onkeyup="cal_all()" disabled style="background-color:#f2f2f2;" type="number" value="${data.cattle_purchase}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">Direct Cost</label>
                    <input id="direct_cost1" type="number" disabled style="background-color:#f2f2f2;" value="${data.direct_cost}" class="validate">
                  </div>
                </td>
                <td>
                  <div class="recipe-ingredients">
                    <label for="title">OH + interest</label>
                    <input id="oh_interest1" type="number" disabled style="background-color:#f2f2f2;" value="${data.oh_interest}" class="validate">
                  </div>
                </td>
              </tr>
              <tr style="border:none;">
                <td colspan="2">
                  <div class="recipe-ingredients-result">
                    <label style="font-size: 13px;font-weight: bold;">Total Cattle Cost</label>
                    <input disabled style="background-color:#f2f2f2;" id="cattle_cost1" type="number" value="" class="validate">
                  </div> 
                </td>
              </tr>
            <table>
            <div class="center">
              <a style="border-radius:15px; margin-bottom:20px;" id="cal_btn" class="btn-small btn-large update-btn" data-id="${id}">
                Calculate
              </a>
            </div>
            </form> 
            <div >
              Cost Reference :
                <i class="right material-icons sidenav-trigger" data-target="side-form">settings</i>
              <table>
                <th>Direct Cost Calculation</th>
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
                      <label id="feed_cost" style="display:none;font-size: 13px;"></label>
                      <label id="feed_cost1" style="font-size: 13px;"></label>
                    </div>  
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stfeed_cost" onchange="cal_all()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stfeed_cost1" style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>Med Cost</td>
                  <td>
                    <div style="float:right;">
                      <label id="med_cost" style="display:none;font-size: 13px;"></label>
                      <label id="med_cost1" style="font-size: 13px;"></label>
                    </div>
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stmed_cost" onchange="cal_all()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stmed_cost1"  style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>Labour Cost</td>
                  <td>
                    <div style="float:right;">
                      <label id="labour_cost" style="display:none;font-size: 13px;"></label>
                      <label id="labour_cost1" style="font-size: 13px;"></label>
                    </div>
                  </td>
                  <td>
                  <div style="float:right;">
                    <label id="stlabour_cost" onchange="cal_all()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                    <label id="stlabour_cost1"  style="font-size: 13px;font-weight: bold;"></label>
                  </div>
                  </td>
                </tr>
                <tr class="recipe-ingredients-result1"> 
                  <td>Foh</td>
                  <td>
                  <div style="float:right;">
                    <label id="foh" style="display:none;font-size: 13px;"></label>
                    <label id="foh11" style="font-size: 13px;"></label>
                  </div>
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stfoh" onchange="cal_all()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stfoh1"  style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td colspan="2">Total</td>
                  <td>
                    <div style="float:right;">
                      <label id="sttot" onchange="cal_all()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="sttot1"  style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
                <tr style="border:none;" class="recipe-ingredients-result1"> 
                  <td>OPEX + Interest</td>
                  <td>
                    <div style="float:right;">
                      <label id="opex_int" style="display:none;font-size: 13px;"></label>
                      <label id="opex_int1" style="font-size: 13px;"></label>
                    </div>
                  </td>
                  <td>
                    <div style="float:right;">
                      <label id="stopex_int" onchange="cal_all()" style="display:none;font-size: 13px;font-weight: bold;"></label>
                      <label id="stopex_int1" right style="font-size: 13px;font-weight: bold;"></label>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
        </div>
      </div>
  `;
  recipes.innerHTML += html;

  var stfeed_cost = Number(data.feed_cost)*Number(document.getElementById('dof1').value);
  var stmed_cost = Number(data.med_cost)*Number(document.getElementById('dof1').value);
  var stlabour_cost = Number(data.labour_cost)*Number(document.getElementById('dof1').value);
  var stfoh = Number(data.foh)*Number(document.getElementById('dof1').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var stopex_int = Number(data.opex_int)*Number(document.getElementById('dof1').value);
  document.getElementById('feed_cost').innerHTML = Math.ceil(data.feed_cost);
  document.getElementById('med_cost').innerHTML = Math.ceil(data.med_cost);
  document.getElementById('labour_cost').innerHTML = Math.ceil(data.labour_cost);
  document.getElementById('foh').innerHTML = Math.ceil(data.foh);
  document.getElementById('opex_int').innerHTML = Math.ceil(data.opex_int);
  document.getElementById('feed_cost1').innerHTML = Math.ceil(data.feed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('med_cost1').innerHTML = Math.ceil(data.med_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('labour_cost1').innerHTML = Math.ceil(data.labour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('foh11').innerHTML = Math.ceil(data.foh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('opex_int1').innerHTML = Math.ceil(data.opex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('btn_update').value = id;

  document.getElementById('feed1').value = data.feed_cost;
  document.getElementById('med1').value = data.med_cost;
  document.getElementById('labour1').value = data.labour_cost;
  document.getElementById('foh1').value = data.foh;
  document.getElementById('opex1').value = data.opex_int;

  document.getElementById('stfeed_cost').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost1').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost1').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost1').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh1').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot1').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stopex_int').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int1').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // update a recipe
  const updatreCalContainer = document.querySelector('.recipeshome');
  if(updatreCalContainer){
    var input = document.getElementById('adg1');
    input.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('cal_btn').click();
        document.getElementById("cattle_cost1").disabled = false;
        document.getElementById("cattle_cost1").readOnly = true;
        document.getElementById('cattle_cost1').focus();
        document.getElementById("cattle_cost1").disabled = true;
      }
    });

    updatreCalContainer.addEventListener('click', evt => {
      if(evt.target.tagName === 'A'){
        const id = evt.target.getAttribute('data-id');
        var val_cattle_puchase = Number(document.getElementById('cattle_purchase1').value);
        var val_direc_cost = Number(document.getElementById('direct_cost1').value);
        var val_oh_interest = Number(document.getElementById('oh_interest1').value);
        var nilai_cattle_cost1 = val_cattle_puchase+val_direc_cost+val_oh_interest;
        document.getElementById('cattle_cost1').value = Math.ceil(nilai_cattle_cost1);
        // db.collection('recipes').doc(id).update({
        //   rate: document.getElementById('rate1').value,
        //   purchase_price: document.getElementById('purchase_price1').value,
        //   cattle_weight: document.getElementById('cattle_weight1').value,
        //   purchase_price_all: document.getElementById('purchase_price_all1').value,
        //   cattle_sold_weight: document.getElementById('cattle_sold_weight1').value,
        //   dof: document.getElementById('dof1').value,
        //   adg: document.getElementById('adg1').value,
        //   cattle_purchase: document.getElementById('cattle_purchase1').value,
        //   direct_cost: document.getElementById('direct_cost1').value,
        //   oh_interest: document.getElementById('oh_interest1').value,
        //   cattle_cost: nilai_cattle_cost1
        // });   
        // cal_all_btn();   
      }
    });
  }
};

// update recipe data
const updateRenderRecipe = (data, id) => {
  document.getElementById('feed_cost').innerHTML = Math.ceil(data.feed_cost);
  document.getElementById('med_cost').innerHTML = Math.ceil(data.med_cost);
  document.getElementById('labour_cost').innerHTML = Math.ceil(data.labour_cost);
  document.getElementById('foh').innerHTML = Math.ceil(data.foh);
  document.getElementById('opex_int').innerHTML = Math.ceil(data.opex_int);
  document.getElementById('feed_cost1').innerHTML = Math.ceil(data.feed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('med_cost1').innerHTML = Math.ceil(data.med_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('labour_cost1').innerHTML = Math.ceil(data.labour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('foh11').innerHTML = Math.ceil(data.foh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('opex_int1').innerHTML = Math.ceil(data.opex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  var stfeed_cost = Number(data.feed_cost)*Number(document.getElementById('dof1').value);
  var stmed_cost = Number(data.med_cost)*Number(document.getElementById('dof1').value);
  var stlabour_cost = Number(data.labour_cost)*Number(document.getElementById('dof1').value);
  var stfoh = Number(data.foh)*Number(document.getElementById('dof1').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var stopex_int = Number(data.opex_int)*Number(document.getElementById('dof1').value);

  document.getElementById('stfeed_cost').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost1').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost1').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost1').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh1').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot1').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stopex_int').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int1').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  var val_dof = Number(document.getElementById('dof1').value);
  var val_cattle_weight = Number(document.getElementById('cattle_weight1').value);
  var val_adg = Number(document.getElementById('adg1').value);
  var val_rate = Number(document.getElementById('rate1').value);
  var val_purchase_price = Number(document.getElementById('purchase_price1').value);
  var val_direct_cost = Number(data.direct_cost);
  var val_oh_interest = Number(data.oh_interest);
  var val_cattle_sold_weight = val_cattle_weight+(val_dof*val_adg);
  var val_purchase_price_all = (val_rate*val_purchase_price*1.05)+700;
  var val_cattle_purchase = val_purchase_price_all*val_cattle_weight/val_cattle_sold_weight;
  
  var stfeed_cost = Number(data.feed_cost)*Number(document.getElementById('dof1').value);
  var stmed_cost = Number(data.med_cost)*Number(document.getElementById('dof1').value);
  var stlabour_cost = Number(data.labour_cost)*Number(document.getElementById('dof1').value);
  var stfoh = Number(data.foh)*Number(document.getElementById('dof1').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var stopex_int = Number(data.opex_int)*Number(document.getElementById('dof1').value);
  document.getElementById('stfeed_cost').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost1').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost1').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost1').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh1').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot1').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stopex_int').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int1').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  document.getElementById('purchase_price_all1').value = Math.ceil(val_purchase_price_all);
  document.getElementById('cattle_sold_weight1').value = Math.ceil(val_cattle_sold_weight);
  document.getElementById('cattle_purchase1').value = Math.ceil(val_cattle_purchase);
  // var val_sttot = Number(document.getElementById('sttot').textContent);
  // var val_stopex_int = Number(document.getElementById('stopex_int').textContent);
  document.getElementById('direct_cost1').value = Math.ceil(sttot/val_cattle_sold_weight);
  document.getElementById('oh_interest1').value = Math.ceil(stopex_int/val_cattle_sold_weight);
  // var val_cattle_purchase1 = Number(document.getElementById('cattle_purchase1').value);
  // var val_tot_cattle_cost = val_cattle_purchase+val_direct_cost+val_oh_interest;
  document.getElementById('cattle_cost1').value = "";
};

function cal_all(){
  console.log("OK");
  var val_dof = Number(document.getElementById('dof1').value);
  var val_cattle_weight = Number(document.getElementById('cattle_weight1').value);
  var val_adg = Number(document.getElementById('adg1').value);
  var val_rate = Number(document.getElementById('rate1').value);
  var val_purchase_price = Number(document.getElementById('purchase_price1').value);
  var val_direct_cost = Number(document.getElementById('direct_cost1').value);
  var val_oh_interest = Number(document.getElementById('oh_interest1').value);
  var val_sttot = Number(document.getElementById('sttot').textContent);
  var val_stopex_int = Number(document.getElementById('stopex_int').textContent);
  var val_cattle_sold_weight = val_cattle_weight+(val_dof*val_adg);
  var val_purchase_price_all = (val_rate*val_purchase_price*1.05)+700;
  var val_cattle_purchase = val_purchase_price_all*val_cattle_weight/val_cattle_sold_weight;
  
  var stfeed_cost = Number(document.getElementById('feed_cost').textContent)*Number(document.getElementById('dof1').value);
  var stmed_cost = Number(document.getElementById('med_cost').textContent)*Number(document.getElementById('dof1').value);
  var stlabour_cost = Number(document.getElementById('labour_cost').textContent)*Number(document.getElementById('dof1').value);
  var stfoh = Number(document.getElementById('foh').textContent)*Number(document.getElementById('dof1').value);
  var sttot = stfeed_cost+stmed_cost+stlabour_cost+stfoh;
  var stopex_int = Number(document.getElementById('opex_int').textContent)*Number(document.getElementById('dof1').value);
  document.getElementById('stfeed_cost').innerHTML = Math.ceil(stfeed_cost);
  document.getElementById('stfeed_cost1').innerHTML = Math.ceil(stfeed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stmed_cost').innerHTML = Math.ceil(stmed_cost);
  document.getElementById('stmed_cost1').innerHTML = Math.ceil(stmed_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stlabour_cost').innerHTML = Math.ceil(stlabour_cost);
  document.getElementById('stlabour_cost1').innerHTML = Math.ceil(stlabour_cost).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stfoh').innerHTML = Math.ceil(stfoh);
  document.getElementById('stfoh1').innerHTML = Math.ceil(stfoh).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('sttot').innerHTML = Math.ceil(sttot);
  document.getElementById('sttot1').innerHTML = Math.ceil(sttot).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('stopex_int').innerHTML = Math.ceil(stopex_int);
  document.getElementById('stopex_int1').innerHTML = Math.ceil(stopex_int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  document.getElementById('purchase_price_all1').value = Math.ceil(val_purchase_price_all);
  document.getElementById('cattle_sold_weight1').value = Math.ceil(val_cattle_sold_weight);
  document.getElementById('cattle_purchase1').value = Math.ceil(val_cattle_purchase);
  document.getElementById('direct_cost1').value = Math.ceil(val_sttot/val_cattle_sold_weight);
  document.getElementById('oh_interest1').value = Math.ceil(val_stopex_int/val_cattle_sold_weight);
  // var val_cattle_purchase1 = Number(document.getElementById('cattle_purchase1').value);
  // var val_tot_cattle_cost = val_cattle_purchase1+val_direct_cost+val_oh_interest;
  document.getElementById('cattle_cost1').value = "";
}

// render recipe1 data
const renderRecipe1 = (data, id) => {
  const html = `
      <div class="card-panel recipe white row" data-id="${id}">
        <div class="recipe-details">
          <form class="add-recipe container section" autocomplete="off">
            <div class="recipe-title">Under Construction</div>
            <div></div>
          </form>  
        </div>
      </div>
  `;
  recipes1.innerHTML += html;
};

// render recipe2 data
const renderRecipe2 = (data, id) => {
  const html = `
      <div class="card-panel recipe white row" data-id="${id}">
        <div class="recipe-details">
          <form class="add-recipe container section" autocomplete="off">
            <div class="recipe-title">Under Construction</div>
            <div></div>
          </form>  
        </div>
      </div>
  `;
  recipes2.innerHTML += html;
};

//remove recipe from
const removeRecipe = (id) => {
  const recipe = document.querySelector(`.recipe[data-id=${id}]`)
  recipe.remove();
}