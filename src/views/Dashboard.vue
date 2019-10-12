<template>
  <div>
    <Alert></Alert>
    <div class="container-fluid">
      <Navbar></Navbar>
      <!-- <Alert></Alert> -->
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/DashboardSidebar'
import Navbar from '../components/DashboardNavbar'
import Alert from '../components/Alert'
export default {
  components: {
    Navbar,
    Sidebar,
    Alert
  }
}
</script>
