<template>
  <div class="font-robo">
    <input type="checkbox" id="check" />
    <!--header area start-->
    <header class="px-10 pt-2 pb-2 bg-primary">
      <label for="check">
        <i
          class="px-4 py-3 opacity-0 md:opacity-100 fa fa-bars"
          id="sidebar_btn"
        ></i>
      </label>
      <div class="h-8 text-lg left_area">
        <span>
          <!-- <img class="h-16 -mt-4 -ml-8" src="/images/home/header/balquimia-logo.png" alt="logo"/> -->
          <p class="text-white text-3xl mt-3">BALQUIMIA</p>
        </span>
      </div>
      <div class="pb-5 right_area">
        <a
          href="#"
          class="px-4 py-2 font-light bg-extra  logout_btn"
          >Logout</a
        >
      </div>
    </header>

    <!--mobile navigation bar end-->
    <!--sidebar start-->
    <div class="border-b border-r sidebar mt-20 pt-4">
      <div class="profile_info">
        <img src="/images/dashboard/1.svg" class="h-20" alt="" />
        <h4 class="mt-2 text-gray-700 ">Jhon James</h4>
      </div>
      <div>
        <nuxt-link
          class="ml-4 text-gray-700 hover:bg-primary hover:text-white"
          to="/"
        >
          <i class="fa fa-desktop"></i><span>Dashboard</span>
        </nuxt-link>
        <nuxt-link
          class="ml-4 text-gray-700 hover:bg-primary hover:text-white"
          to="/"
        >
          <i class="fa fa-cogs"></i><span>Órdenes trabajo</span>
        </nuxt-link>
        <nuxt-link
          class="ml-4 text-gray-700 hover:bg-primary hover:text-white"
          to="/"
        >
          <i class="fa fa-table"></i><span>Cartera</span>
        </nuxt-link>
        <nuxt-link
          class="ml-4 text-gray-700 hover:bg-primary hover:text-white"
          to="/"
        >
          <i class="fa fa-th"></i><span>Reuniones</span>
        </nuxt-link>
        <nuxt-link
          class="ml-4 text-gray-700 hover:bg-primary hover:text-white"
          to="/"
        >
          <i class="fa fa-info-circle"></i><span>Configuración</span>
        </nuxt-link>
      </div>
    </div>
    <!--sidebar end-->
  </div>
</template>
<script>
export default {
  name: "index",
};
</script>
<style>


header {
  z-index: 1;
  position: fixed;
  width: calc(100% - 0%);
  top: 0;
  
}





.logout_btn {

  text-decoration: none;
  float: right;
  margin-top: -30px;
  
  border-radius: 2px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  transition: 0.5s;
  transition-property: background;
}



.sidebar {
  z-index: 1;
  top: 0;
  
  
  position: fixed;
  left: 0;
  width: 250px;
  height: calc(100% - 9%);
  transition: 0.5s;
  transition-property: left;
  overflow-y: auto;
}

.profile_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar .profile_info .profile_image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
}

.sidebar .profile_info h4 {
  color: #ccc;
  margin-top: 0;
  margin-bottom: 20px;
}

.sidebar a {
  color: black;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
}


.sidebar i {
  padding-right: 10px;
}

label #sidebar_btn {
  z-index: 1;
  color: #fff;
  position: fixed;
  cursor: pointer;
  left: 300px;
  font-size: 20px;
  margin: 5px 0;
  transition: 0.5s;
  transition-property: color;
}

label #sidebar_btn:hover {
  color: #19b3d3;
}

#check:checked ~ .sidebar {
  left: -185px;
}

#check:checked ~ .sidebar a span {
  display: none;
}

#check:checked ~ .sidebar a {
  font-size: 20px;
  margin-left: 165px;
  width: 100%;
}

.content {
  width: (100% - 250px);
  margin-top: 60px;
  padding: 20px;
  margin-left: 250px;

  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: 0.5s;
}

#check:checked ~ .content {
  margin-left: 60px;
}

#check:checked ~ .sidebar .profile_info {
  display: none;
}

#check {
  display: none;
}

.mobile_nav {
  display: none;
}

.content .card p {
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  opacity: 0.8;
}

/* Responsive CSS */

@media screen and (max-width: 780px) {
  

  /* .content {
    margin-left: 0;
    margin-top: 0;
    padding: 10px 20px;
    transition: 0s;
  }

  #check:checked ~ .content {
    margin-left: 0;
  }

  .mobile_nav {
    display: block;
    width: calc(100% - 0%);
  }

  .nav_bar {
    background: #222;
    width: (100% - 0px);
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .nav_bar .mobile_profile_image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .nav_bar .nav_btn {
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    transition: 0.5s;
    transition-property: color;
  }

  .nav_bar .nav_btn:hover {
    color: #19b3d3;
  } */
}
</style>