new Vue({
	el: ".calculator",
	data () {
    return {
      display: '',
      operation: '',
      temp: 0,
      res: 0
    }
  },
  methods: {
    setNum: function (number) {
      if (this.display === '') {
        this.display = number
      } else {
        this.display += number
      }
    },
    del: function () {
      var num = this.display.toString()
      var newNum = num.substring(0, num.length - 1)
      this.display = newNum
    },
    clear: function () {
      this.display = ''
    },
    setSym: function (sym) {
      this.temp = this.display
      this.operation = sym
      this.display = ''
    },
    calculate: function () {
      switch (this.operation) {
        case '+':
          this.res = parseFloat(this.temp) + parseFloat(this.display)
          break
        case '-':
          this.res = parseFloat(this.temp) - parseFloat(this.display)
          break
        case 'x':
          this.res = parseFloat(this.temp) * parseFloat(this.display)
          break
        case '/':
          this.res = parseFloat(this.temp) / parseFloat(this.display)
          break
      }
      this.display = this.res
    }
  }
})