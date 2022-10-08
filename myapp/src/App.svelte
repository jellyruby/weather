<script>

	let name = "jonghwa";
	//let fruits = ["apple","pineapple","melon","mango"];
	let snows = [...new Array(100)];
	let snowClass = 'b';

</script>

{#each snows as snow}
	<div class={snowClass}></div>
{/each}

<button on:click={()=>{snowClass = snowClass == 'b' ? 'a' : 'b'}}>
	Snow Off
</button>

<div>

  
</div>


<style>

.b {
  border-radius: 50%;
  float: left;
  margin-top: -50px;
  position: absolute;
}
.b:nth-child(1) {
  margin-left: 0%;
  width: 7px;
  height: 7px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 25s 3s infinite;
}
.b:nth-child(2) {
  margin-left: 1%;
  width: 9px;
  height: 9px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 29s 2s infinite;
}
.b:nth-child(3) {
  margin-left: 2%;
  width: 5px;
  height: 5px;
  background: rgba(232, 232, 232, 0.8);
  box-shadow: 0 0 15px 10px rgba(232, 232, 232, 0.5);
  animation: fall 27s 7s infinite;
}
.b:nth-child(4) {
  margin-left: 3%;
  width: 4px;
  height: 4px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 14s 5s infinite;
}
.b:nth-child(5) {
  margin-left: 4%;
  width: 11px;
  height: 11px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 17s 7s infinite;
}
.b:nth-child(6) {
  margin-left: 5%;
  width: 6px;
  height: 6px;
  background: rgba(252, 252, 252, 0.8);
  box-shadow: 0 0 15px 10px rgba(252, 252, 252, 0.5);
  animation: fall 22s 3s infinite;
}
.b:nth-child(7) {
  margin-left: 6%;
  width: 6px;
  height: 6px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 18s 8s infinite;
}
.b:nth-child(8) {
  margin-left: 7%;
  width: 6px;
  height: 6px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 23s 4s infinite;
}
.b:nth-child(9) {
  margin-left: 8%;
  width: 10px;
  height: 10px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 12s 5s infinite;
}
.b:nth-child(10) {
  margin-left: 9%;
  width: 10px;
  height: 10px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 30s 11s infinite;
}
.b:nth-child(11) {
  margin-left: 10%;
  width: 4px;
  height: 4px;
  background: rgba(232, 232, 232, 0.8);
  box-shadow: 0 0 15px 10px rgba(232, 232, 232, 0.5);
  animation: fall 15s 6s infinite;
}
.b:nth-child(12) {
  margin-left: 11%;
  width: 5px;
  height: 5px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 13s 10s infinite;
}
.b:nth-child(13) {
  margin-left: 12%;
  width: 9px;
  height: 9px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 18s 5s infinite;
}
.b:nth-child(14) {
  margin-left: 13%;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px 10px rgba(255, 255, 255, 0.5);
  animation: fall 17s 9s infinite;
}
.b:nth-child(15) {
  margin-left: 14%;
  width: 6px;
  height: 6px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 25s 10s infinite;
}
.b:nth-child(16) {
  margin-left: 15%;
  width: 9px;
  height: 9px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 25s 9s infinite;
}
.b:nth-child(17) {
  margin-left: 16%;
  width: 7px;
  height: 7px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 19s 11s infinite;
}
.b:nth-child(18) {
  margin-left: 17%;
  width: 6px;
  height: 6px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 16s 5s infinite;
}
.b:nth-child(19) {
  margin-left: 18%;
  width: 2px;
  height: 2px;
  background: rgba(252, 252, 252, 0.8);
  box-shadow: 0 0 15px 10px rgba(252, 252, 252, 0.5);
  animation: fall 16s 10s infinite;
}
.b:nth-child(20) {
  margin-left: 19%;
  width: 3px;
  height: 3px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 17s 3s infinite;
}
.b:nth-child(21) {
  margin-left: 20%;
  width: 10px;
  height: 10px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 28s 5s infinite;
}
.b:nth-child(22) {
  margin-left: 21%;
  width: 11px;
  height: 11px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px 10px rgba(255, 255, 255, 0.5);
  animation: fall 29s 11s infinite;
}
.b:nth-child(23) {
  margin-left: 22%;
  width: 8px;
  height: 8px;
  background: rgba(245, 245, 245, 0.8);
  box-shadow: 0 0 15px 10px rgba(245, 245, 245, 0.5);
  animation: fall 15s 11s infinite;
}
.b:nth-child(24) {
  margin-left: 23%;
  width: 4px;
  height: 4px;
  background: rgba(245, 245, 245, 0.8);
  box-shadow: 0 0 15px 10px rgba(245, 245, 245, 0.5);
  animation: fall 20s 3s infinite;
}
.b:nth-child(25) {
  margin-left: 24%;
  width: 11px;
  height: 11px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 27s 11s infinite;
}
.b:nth-child(26) {
  margin-left: 25%;
  width: 6px;
  height: 6px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 29s 7s infinite;
}
.b:nth-child(27) {
  margin-left: 26%;
  width: 3px;
  height: 3px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 25s 11s infinite;
}
.b:nth-child(28) {
  margin-left: 27%;
  width: 9px;
  height: 9px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 29s 3s infinite;
}
.b:nth-child(29) {
  margin-left: 28%;
  width: 8px;
  height: 8px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 18s 4s infinite;
}
.b:nth-child(30) {
  margin-left: 29%;
  width: 5px;
  height: 5px;
  background: rgba(245, 245, 245, 0.8);
  box-shadow: 0 0 15px 10px rgba(245, 245, 245, 0.5);
  animation: fall 19s 8s infinite;
}
.b:nth-child(31) {
  margin-left: 30%;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px 10px rgba(255, 255, 255, 0.5);
  animation: fall 13s 10s infinite;
}
.b:nth-child(32) {
  margin-left: 31%;
  width: 3px;
  height: 3px;
  background: rgba(252, 252, 252, 0.8);
  box-shadow: 0 0 15px 10px rgba(252, 252, 252, 0.5);
  animation: fall 11s 4s infinite;
}
.b:nth-child(33) {
  margin-left: 32%;
  width: 9px;
  height: 9px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 11s 8s infinite;
}
.b:nth-child(34) {
  margin-left: 33%;
  width: 11px;
  height: 11px;
  background: rgba(252, 252, 252, 0.8);
  box-shadow: 0 0 15px 10px rgba(252, 252, 252, 0.5);
  animation: fall 14s 11s infinite;
}
.b:nth-child(35) {
  margin-left: 34%;
  width: 2px;
  height: 2px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 15s 3s infinite;
}
.b:nth-child(36) {
  margin-left: 35%;
  width: 10px;
  height: 10px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 29s 8s infinite;
}
.b:nth-child(37) {
  margin-left: 36%;
  width: 11px;
  height: 11px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 11s 6s infinite;
}
.b:nth-child(38) {
  margin-left: 37%;
  width: 7px;
  height: 7px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 19s 9s infinite;
}
.b:nth-child(39) {
  margin-left: 38%;
  width: 4px;
  height: 4px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 21s 9s infinite;
}
.b:nth-child(40) {
  margin-left: 39%;
  width: 10px;
  height: 10px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 26s 3s infinite;
}
.b:nth-child(41) {
  margin-left: 40%;
  width: 11px;
  height: 11px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px 10px rgba(255, 255, 255, 0.5);
  animation: fall 20s 10s infinite;
}
.b:nth-child(42) {
  margin-left: 41%;
  width: 7px;
  height: 7px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 30s 2s infinite;
}
.b:nth-child(43) {
  margin-left: 42%;
  width: 2px;
  height: 2px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 12s 3s infinite;
}
.b:nth-child(44) {
  margin-left: 43%;
  width: 2px;
  height: 2px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 30s 4s infinite;
}
.b:nth-child(45) {
  margin-left: 44%;
  width: 7px;
  height: 7px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 11s 11s infinite;
}
.b:nth-child(46) {
  margin-left: 45%;
  width: 6px;
  height: 6px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 19s 2s infinite;
}
.b:nth-child(47) {
  margin-left: 46%;
  width: 6px;
  height: 6px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 20s 10s infinite;
}
.b:nth-child(48) {
  margin-left: 47%;
  width: 11px;
  height: 11px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 12s 10s infinite;
}
.b:nth-child(49) {
  margin-left: 48%;
  width: 10px;
  height: 10px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 21s 9s infinite;
}
.b:nth-child(50) {
  margin-left: 49%;
  width: 4px;
  height: 4px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 29s 10s infinite;
}
.b:nth-child(51) {
  margin-left: 50%;
  width: 4px;
  height: 4px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 13s 7s infinite;
}
.b:nth-child(52) {
  margin-left: 51%;
  width: 4px;
  height: 4px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 17s 6s infinite;
}
.b:nth-child(53) {
  margin-left: 52%;
  width: 4px;
  height: 4px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 21s 7s infinite;
}
.b:nth-child(54) {
  margin-left: 53%;
  width: 11px;
  height: 11px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 17s 9s infinite;
}
.b:nth-child(55) {
  margin-left: 54%;
  width: 7px;
  height: 7px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 11s 7s infinite;
}
.b:nth-child(56) {
  margin-left: 55%;
  width: 8px;
  height: 8px;
  background: rgba(232, 232, 232, 0.8);
  box-shadow: 0 0 15px 10px rgba(232, 232, 232, 0.5);
  animation: fall 23s 9s infinite;
}
.b:nth-child(57) {
  margin-left: 56%;
  width: 3px;
  height: 3px;
  background: rgba(232, 232, 232, 0.8);
  box-shadow: 0 0 15px 10px rgba(232, 232, 232, 0.5);
  animation: fall 23s 4s infinite;
}
.b:nth-child(58) {
  margin-left: 57%;
  width: 6px;
  height: 6px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 25s 5s infinite;
}
.b:nth-child(59) {
  margin-left: 58%;
  width: 7px;
  height: 7px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 21s 10s infinite;
}
.b:nth-child(60) {
  margin-left: 59%;
  width: 6px;
  height: 6px;
  background: rgba(252, 252, 252, 0.8);
  box-shadow: 0 0 15px 10px rgba(252, 252, 252, 0.5);
  animation: fall 18s 5s infinite;
}
.b:nth-child(61) {
  margin-left: 60%;
  width: 10px;
  height: 10px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 23s 9s infinite;
}
.b:nth-child(62) {
  margin-left: 61%;
  width: 2px;
  height: 2px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 21s 4s infinite;
}
.b:nth-child(63) {
  margin-left: 62%;
  width: 4px;
  height: 4px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 19s 2s infinite;
}
.b:nth-child(64) {
  margin-left: 63%;
  width: 9px;
  height: 9px;
  background: rgba(232, 232, 232, 0.8);
  box-shadow: 0 0 15px 10px rgba(232, 232, 232, 0.5);
  animation: fall 23s 10s infinite;
}
.b:nth-child(65) {
  margin-left: 64%;
  width: 6px;
  height: 6px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 15s 9s infinite;
}
.b:nth-child(66) {
  margin-left: 65%;
  width: 10px;
  height: 10px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 11s 6s infinite;
}
.b:nth-child(67) {
  margin-left: 66%;
  width: 9px;
  height: 9px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 18s 8s infinite;
}
.b:nth-child(68) {
  margin-left: 67%;
  width: 10px;
  height: 10px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 14s 9s infinite;
}
.b:nth-child(69) {
  margin-left: 68%;
  width: 11px;
  height: 11px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 25s 7s infinite;
}
.b:nth-child(70) {
  margin-left: 69%;
  width: 11px;
  height: 11px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 20s 11s infinite;
}
.b:nth-child(71) {
  margin-left: 70%;
  width: 2px;
  height: 2px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 25s 4s infinite;
}
.b:nth-child(72) {
  margin-left: 71%;
  width: 6px;
  height: 6px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 16s 7s infinite;
}
.b:nth-child(73) {
  margin-left: 72%;
  width: 5px;
  height: 5px;
  background: rgba(245, 245, 245, 0.8);
  box-shadow: 0 0 15px 10px rgba(245, 245, 245, 0.5);
  animation: fall 21s 6s infinite;
}
.b:nth-child(74) {
  margin-left: 73%;
  width: 3px;
  height: 3px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 19s 8s infinite;
}
.b:nth-child(75) {
  margin-left: 74%;
  width: 7px;
  height: 7px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 13s 9s infinite;
}
.b:nth-child(76) {
  margin-left: 75%;
  width: 4px;
  height: 4px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 13s 3s infinite;
}
.b:nth-child(77) {
  margin-left: 76%;
  width: 3px;
  height: 3px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 29s 4s infinite;
}
.b:nth-child(78) {
  margin-left: 77%;
  width: 9px;
  height: 9px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 24s 5s infinite;
}
.b:nth-child(79) {
  margin-left: 78%;
  width: 11px;
  height: 11px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 15s 5s infinite;
}
.b:nth-child(80) {
  margin-left: 79%;
  width: 10px;
  height: 10px;
  background: rgba(232, 232, 232, 0.8);
  box-shadow: 0 0 15px 10px rgba(232, 232, 232, 0.5);
  animation: fall 20s 8s infinite;
}
.b:nth-child(81) {
  margin-left: 80%;
  width: 7px;
  height: 7px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 18s 4s infinite;
}
.b:nth-child(82) {
  margin-left: 81%;
  width: 9px;
  height: 9px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 28s 8s infinite;
}
.b:nth-child(83) {
  margin-left: 82%;
  width: 4px;
  height: 4px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 23s 6s infinite;
}
.b:nth-child(84) {
  margin-left: 83%;
  width: 4px;
  height: 4px;
  background: rgba(245, 245, 245, 0.8);
  box-shadow: 0 0 15px 10px rgba(245, 245, 245, 0.5);
  animation: fall 26s 9s infinite;
}
.b:nth-child(85) {
  margin-left: 84%;
  width: 7px;
  height: 7px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 16s 11s infinite;
}
.b:nth-child(86) {
  margin-left: 85%;
  width: 2px;
  height: 2px;
  background: rgba(237, 237, 237, 0.8);
  box-shadow: 0 0 15px 10px rgba(237, 237, 237, 0.5);
  animation: fall 14s 11s infinite;
}
.b:nth-child(87) {
  margin-left: 86%;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px 10px rgba(255, 255, 255, 0.5);
  animation: fall 29s 9s infinite;
}
.b:nth-child(88) {
  margin-left: 87%;
  width: 2px;
  height: 2px;
  background: rgba(232, 232, 232, 0.8);
  box-shadow: 0 0 15px 10px rgba(232, 232, 232, 0.5);
  animation: fall 17s 9s infinite;
}
.b:nth-child(89) {
  margin-left: 88%;
  width: 4px;
  height: 4px;
  background: rgba(232, 232, 232, 0.8);
  box-shadow: 0 0 15px 10px rgba(232, 232, 232, 0.5);
  animation: fall 23s 8s infinite;
}
.b:nth-child(90) {
  margin-left: 89%;
  width: 11px;
  height: 11px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 28s 10s infinite;
}
.b:nth-child(91) {
  margin-left: 90%;
  width: 11px;
  height: 11px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 22s 9s infinite;
}
.b:nth-child(92) {
  margin-left: 91%;
  width: 3px;
  height: 3px;
  background: rgba(247, 247, 247, 0.8);
  box-shadow: 0 0 15px 10px rgba(247, 247, 247, 0.5);
  animation: fall 16s 5s infinite;
}
.b:nth-child(93) {
  margin-left: 92%;
  width: 5px;
  height: 5px;
  background: rgba(245, 245, 245, 0.8);
  box-shadow: 0 0 15px 10px rgba(245, 245, 245, 0.5);
  animation: fall 11s 5s infinite;
}
.b:nth-child(94) {
  margin-left: 93%;
  width: 10px;
  height: 10px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 29s 10s infinite;
}
.b:nth-child(95) {
  margin-left: 94%;
  width: 9px;
  height: 9px;
  background: rgba(250, 250, 250, 0.8);
  box-shadow: 0 0 15px 10px rgba(250, 250, 250, 0.5);
  animation: fall 29s 3s infinite;
}
.b:nth-child(96) {
  margin-left: 95%;
  width: 2px;
  height: 2px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 0 15px 10px rgba(240, 240, 240, 0.5);
  animation: fall 29s 7s infinite;
}
.b:nth-child(97) {
  margin-left: 96%;
  width: 7px;
  height: 7px;
  background: rgba(252, 252, 252, 0.8);
  box-shadow: 0 0 15px 10px rgba(252, 252, 252, 0.5);
  animation: fall 22s 2s infinite;
}
.b:nth-child(98) {
  margin-left: 97%;
  width: 10px;
  height: 10px;
  background: rgba(242, 242, 242, 0.8);
  box-shadow: 0 0 15px 10px rgba(242, 242, 242, 0.5);
  animation: fall 13s 4s infinite;
}
.b:nth-child(99) {
  margin-left: 98%;
  width: 10px;
  height: 10px;
  background: rgba(232, 232, 232, 0.8);
  box-shadow: 0 0 15px 10px rgba(232, 232, 232, 0.5);
  animation: fall 22s 8s infinite;
}
.b:nth-child(100) {
  margin-left: 99%;
  width: 9px;
  height: 9px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 0 15px 10px rgba(235, 235, 235, 0.5);
  animation: fall 29s 7s infinite;
}

@keyframes fall {
  0% {
    transform: scale(0);
  }
  2% {
    transform: scale(1);
    top: -50px;
  }
  100% {
    transform: scale(0);
    top: 100%;
  }
}
</style>