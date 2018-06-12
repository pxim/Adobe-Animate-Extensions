package  {
	
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.text.TextField;
	
	
	public class Symbol1 extends MovieClip {
		
		
		public function Symbol1() {
			// constructor code
			
			var btn:Sprite = new Sprite();  
			btn.graphics.beginFill(0x00FF00, 1);
			btn.graphics.drawCircle(400, 300, 25);
			btn.graphics.endFill();
			var textField = new TextField();
			textField.text = "10001121";
			//trace("" + textField.textWidth);
			textField.width = textField.textWidth; // default width is 100
			textField.height = textField.textHeight;
			trace(this.stage.width);
			textField.x = this.stage.width / 2; // center it horizontally
			textField.y = this.stage.height / 2; // center it vertically
			btn.addChild(textField);
			this.addChild(btn);
		}
	}	
	
}
