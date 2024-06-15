<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <h2 class="footer__name">Karakure178</h2>
      <p class="footer__copyright">CopyRight @2024</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
// ===========================================
// footer
// ===========================================

.footer {
  background-color: $blackColor;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;

  @include L-XL {
  }

  @include S-M {
  }
}

.footer__name,
.footer__copyright {
  font-family: $roboto;
  color: #707070;
}

.footer__name {
  letter-spacing: 0.08em;

  @include L-XL {
    font-size: 40px;
  }

  @include S-M {
    font-size: 25px;
  }
}

.footer__copyright {
  padding-top: 5px;

  @include L-XL {
    font-size: 20px;
  }
}
</style>
