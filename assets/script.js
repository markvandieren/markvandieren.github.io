function makeSlideShow(slideID)
{
	let slideshow = {
		currSlide: 1,
		images: document.getElementsByClassName(slideID),
		slideID: slideID,
		buttonLeft: document.getElementById(slideID.concat("BtnLeft")),
		buttonRight: document.getElementById(slideID.concat("BtnRight")),
		setSlide: function(nextSlide)
		{
			if (nextSlide > this.images.length) { this.currSlide = 1; } 
			if (nextSlide < 1) { this.currSlide = this.images.length; }
			for (var i = 0; i < this.images.length; i++)
			{
				this.images[i].style.display = "none"; 
			}
			this.images[this.currSlide-1].style.display = "block"; 

			this.buttonLeft.disabled = false;
			this.buttonRight.disabled = false;
			if (this.currSlide == 1)
			{
				this.buttonLeft.disabled = true;
			}
			else if (this.currSlide == this.images.length)
			{
				this.buttonRight.disabled = true;
			}
		},
		nextSlide: function(offset)
		{
			this.setSlide(this.currSlide += offset);
		}
	}
	return slideshow;
}