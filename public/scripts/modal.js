function login(){
  document.getElementsByClassName('modall')[0].style.display = 'block';
  document.getElementsByClassName('modall')[0].innerHTML = `
  <div class="content">
    <p class="cross" onclick="cross()">+</p>
    <div id="page-info">
      <h2 >Login</h2>
    </div>
    <div class="buttons">
      <div id="login" onclick="login()"class="text-center active">
        <span>Login</span>
      </div>
      <div id="signup"  onclick="signup()"class="text-center">
        <span>SignUp</span>
      </div>
    </div>
    <div class="credentials">
      <p>Username</p>
      <input type="text" name="" value="">
      <p>Password</p>
      <input type="password" name="" value="">
      <div class="text-center">
        <button type="button" name="button" class="btn btn-primary mx-2"style="width:auto;">Login</button>
      </div>
    </div>
    </div>
  `;
}


function signup(){
document.getElementsByClassName('modall')[0].style.display = 'block';
document.getElementsByClassName('modall')[0].innerHTML =  `<div class="contentr">
    <p class="cross" onclick="cross()">+</p>
  <div id="page-info">
    <h2 >SignUp</h2>
  </div>
  <div class="buttons">
    <div id="login" onclick="login()"class="text-center">
      <span>Login</span>
    </div>
    <div id="signup" onclick="signup()"class="text-center active">
      <span>SignUp</span>
    </div>
  </div>
  <div class="credentials">
    <p>Username</p>
    <input type="text" name="" value="">
    <p>Password</p>
    <input type="password" name="" value="">
    <p>Confirm Password</p>
    <input type="password" name="" value="">
    <p>Date of birth</p>
    <div class="selectt">
    <select id="month" name="month" placeholder="month" >
      <option value="">January</option>
      <option value="">Feburary</option>
      <option value="">March</option>
      <option value="">April</option>
      <option value="">May</option>
      <option value="">June</option>
      <option value="">July</option>
      <option value="">August</option>
      <option value="">September</option>
      <option value="">October</option>
      <option value="">November</option>
      <option value="">December</option>
    </select>
    <input type="text" name="" value="" placeholder="Day" style="width:100px; display:inline-block">
    <input type="text" name="" value="" placeholder="Year" style="width:100px; display:inline-block">
    </div>
    <p>Email</p>
    <input type="email" name="" value="">
    <p class="text-center" style='font-weight:400;'>By clicking Sign Up, you are indicating that you have read and acknowledge the Terms of Service and Privacy Notice.</p>
    <div class="text-center">
      <button type="button" class="btn btn-primary" name="button">SignUp</button>
    </div>

  </div>

</div>`;

}

function sub(){
  document.getElementsByClassName('modall')[0].style.display="block";
  document.getElementsByClassName('modall')[0].innerHTML=`
  <div class="contentrr">
      <p class="cross" onclick="cross()">+</p>
    <div class="headerr">
      <div>
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/f77898d7-223d-4600-a218-ed8267991538-profile_image-300x300.png" style="height : 50px; border-radius:50%; margin-right:10px;" alt="">
      </div>
      <div class="">
        <h2>ChillhopMusic</h2>
      </div>
    </div>
    <div class="conteent">
      <h4>Tier 1 Subscription</h4>
      <p>Subscriptions are a great way to directly support the streamers you love and get great benefits too!</p>
      <h6 class="mt-5">Benefits</h6>
      <p>Ad-free viewing on ChillhopMusic's channel (with limited exceptions).</p>
      <p>Chat during Subscriber-Only Mode and not affected by chat slow mode.</p>
      <p>Watch Subscriber Streams (access depends on Subscription Tier).</p>
      <p>Instantly unlock your first Sub Badge and show your support.</p>
      <div class="price-box">
        <div class="leftt">
          <h6>Tier 1 Subscription</h6>
          <p>Renews monthly at $4.99</p>
        </div>
        <div class="rightt">
          <button type="button" class="btn btn-light mr-2" name="button">Gift</button>
          <button type="button" class="btn btn-primary"name="button">Subscribe <span>$4.99</span></button>
        </div>
      </div>
      <h4 class="mb-3 mt-5">Higher Tiers</h4>
      <h6 class="mb-3">Tier 2</h6>
        <ul style="display : grid ; grid-template-columns : 1fr 1fr; padding: 0 20px 0 20px;">
          <li style="font-weight : 400!important;">All tier 1 benefits</li>
          <li style="font-weight : 400!important;">Tier 2 Badge Flair</li>
          <li style="font-weight : 400!important;">1 exclusive Emote</li>
          <li style="font-weight : 400!important;">1 emote modifier</li>
        </ul>
        <div class="price-box">
          <div class="leftt">
            <h6>Tier 2 Subscription</h6>
            <p>Renews monthly at $9.99</p>
          </div>
          <div class="rightt">
            <button type="button" class="btn btn-light mr-2" name="button">Gift</button>
            <button type="button" class="btn btn-primary"name="button">Subscribe <span>$9.99</span></button>
          </div>
        </div>
        <h6 class="mb-3 mt-5">Tier 3</h6>
          <ul style="display : grid ; grid-template-columns : 1fr 1fr; padding: 0 20px 0 20px;">
            <li style="font-weight : 400!important;">All tier 2 benefits</li>
            <li style="font-weight : 400!important;">Tier 3 Badge Flair</li>
            <li style="font-weight : 400!important;">1 additional exclusive Emote</li>
            <li style="font-weight : 400!important;">2 additional Emote Modifiers</li>
          </ul>
          <div class="price-box">
            <div class="leftt">
              <h6>Tier 3 Subscription</h6>
              <p>Renews monthly at $24.99</p>
            </div>
            <div class="rightt">
              <button type="button" class="btn btn-light mr-2" name="button">Gift</button>
              <button type="button" class="btn btn-primary"name="button">Subscribe <span>$24.99</span></button>
            </div>
          </div>
    </div>
  </div>
  `;
}

function cross(){
  document.getElementsByClassName('modall')[0].style.display = 'none';
}
