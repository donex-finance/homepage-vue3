<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; 2022 Donex Finance</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li>
              <a href="https://twitter.com/donexfinance"
                ><font-awesome-icon icon="fa-brands fa-twitter"
              /></a>
            </li>
            <!-- TODO: Discord icon and href -->
            <li>
              <a href="#"><font-awesome-icon icon="fa-brands fa-discord" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "BaseFooter",
};
</script>
