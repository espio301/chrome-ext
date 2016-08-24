function stat() {
	this.url="hey";
	this.startHour=null;
	this.startMinute=null;
	this.endHour=null;
	this.endMinute=null;
	this.totalTime=function(){
		var hour = this.endHour - this.startHour;
		var minute = this.endMinute - this.startMinute;
		return hour + ":" + minute;
	};

}