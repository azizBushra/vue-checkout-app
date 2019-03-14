<template>
    <div>
        <ul class="w-pay-opts">
            <li>
                <input type="radio" name="payOpt" value="Credit" checked />
                <label>Credit Card</label>
            </li>
            <li>
                <input type="radio" name="payOpt" value="Paypal" />
                <label>Paypal</label>
            </li>
        </ul>
        <form class="checkout-frm" @submit.prevent="validateBeforeSubmit">
            <div class="w-field">
                <label class="frm-label">Cardholder</label>
                <input v-validate="'required|alpha'" :class="{'input': true, 'has-error': errors.has('cardholder') }" class="frm-field" type="text" name="cardholder" />
                <span v-show="errors.has('cardholder')" class="msg-error">{{ errors.first('cardholder') }}</span>
            </div>

            <div class="w-field">
                <label class="frm-label">Card Number</label>
                <input v-validate="'required|credit_card'" :class="{'input': true, 'has-error': errors.has('cardnumber') }" class="frm-field" type="text" name="cardnumber" placeholder="**** **** **** ****" maxlength="20" />
                <span v-show="errors.has('cardnumber')" class="msg-error">{{ errors.first('cardnumber') }}</span>
           </div>

            <div class="w-field inline">
                <label class="frm-label">Expiry</label>
                <input v-validate="'required|date_format:mm/yy'" :class="{'input': true, 'has-error': errors.has('expiry') }" class="frm-field" type="text" name="expiry" placeholder="MM/YY" maxlength="5" />
                <span v-show="errors.has('expiry')" class="msg-error">{{ errors.first('expiry') }}</span>
            </div>

            <div class="w-field inline">
                <label class="frm-label">CVV</label>
                <input v-validate="'required|numeric|min:3|max:3'" :class="{'input': true, 'has-error': errors.has('cvv') }" class="frm-field" type="text" name="cvv" placeholder="***" maxlength="3" />
                <span v-show="errors.has('cvv')" class="msg-error">{{ errors.first('cvv') }}</span>
            </div>

            <input id="checkout-btn" type="submit" class="btn" value="Checkout" />

        </form>

        <div>
    
  </div>
    </div>
</template>

<script>
export default {
    name : "CheckoutForm",
    data: () => ({
    cardholder: '',
    cardnumber: '',
    expiry: '',
    cvv: ''
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted! (Just pretending)');
          return;
        }

      });
    }
  }
    
}
</script>

<style scoped>
    .w-pay-opts {
        display: flex;
    }

    .w-pay-opts li {
        width: 150px;
        list-style-type: none;
    }

    .w-field {
        display: flex;
        flex-direction: column;
        margin-bottom: .75rem;
    }
    
    .w-field.inline {
        width: 40%;
        display: inline-flex;
        margin-right: 1rem;
    }

    .frm-field {
        padding: 8px 5px;
        border: 1px solid #e6e5e5;
        border-radius: 3px;
        font-size: 16px;
    }

    .frm-field.has-error {
        border-color: red;
    }

    .btn {
        width: 100%;
        padding: .75rem;
        border-radius: 3px;
        background-color: #716f70;
        color: #fff;
        border: none;
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 1rem;
    }

    .msg-error {
        color: red;
        font-size: 12px;
        margin: 4px 0;
    }

    ::placeholder {
        color: #ccc;
        opacity: 1; /* Firefox */
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #ccc;
    }

</style>


