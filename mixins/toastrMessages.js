module.exports = {
  methods: {
    MsgSuccess(Titulo, Message, seconds) {
         this.$toast.show({
           type      : 'success',       timeout     : seconds,
           title     : Titulo,          message     : Message,
           classClose: 'text-teal-300', classMessage: 'text-red-500', classTimeout: 'bg-teal-800', classTitle: 'text-teal-100',
           classToast: 'bg-yellow-300',
       });
    }, 
    MsgWarning(Titulo, Message, seconds) {
         this.$toast.show({
           type      : 'warning',       timeout     : seconds,
           title     : Titulo,          message     : Message,
           classClose: 'text-teal-300', classMessage: 'text-red-500', classTimeout: 'bg-teal-800', classTitle: 'text-teal-100',
           classToast: 'bg-yellow-300',
       });
    },
       MsgInfo(Titulo, Message, seconds) {
         this.$toast.show({
           type      : 'info',          timeout     : seconds,
           title     : Titulo,          message     : Message,
           classClose: 'text-teal-300', classMessage: 'text-red-500', classTimeout: 'bg-teal-800', classTitle: 'text-teal-100',
           classToast: 'bg-yellow-300',
       });
    },
       MsgError(Titulo, Message, seconds) {
         this.$toast.show({
           type      : 'danger',        timeout     : seconds,
           title     : Titulo,          message     : Message,
           classClose: 'text-teal-300', classMessage: 'text-red-500', classTimeout: 'bg-teal-800', classTitle: 'text-teal-100',
           classToast: 'bg-yellow-300',
       });
    },
  }
}
/*

 this.$toast.show({
    title: 'Toast with actions',
    message: 'This toast has multiple actions',
    primary: { label: 'Primary', action: () => alert('primary') },
    secondary: { label: 'Secondary', action: () => alert('secondary') },
    timeout: false,
  })
  */