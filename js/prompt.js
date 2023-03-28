// problem :1 some middle log will be logged after 3.5 seconds

console.log('1')
console.log('2')
console.log('3')
console.log('4')
const something = () => {
    console.log('5')
}
setTimeout(function () {
    something();
}, 3500)
console.log('6')
console.log('7')

// problem :2 

const addAlert = () => {
    alert('amake 250 taka bkash koro')
}