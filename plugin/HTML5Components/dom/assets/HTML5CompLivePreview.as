package  {
	
	import flash.display.MovieClip;
	import flash.text.TextField;
	import flash.display.Shape;
	import flash.display.Graphics;
	import flash.geom.Matrix;
	import flash.geom.Point;
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.net.URLRequest;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.display.Loader;
	import fl.motion.Motion;
	import fl.motion.MotionBase;
	import fl.motion.motion_internal;
	import flash.geom.Rectangle;
	
	
	public class HTML5CompLivePreview extends MovieClip {
		
		private var _name: String = "Component";
		private var _textField: TextField = new TextField();
		private var _fill: Grid = new Grid(0, 0);
		private var _shape:Shape = new Shape();
		private var _graphics:Graphics = _shape.graphics;
		private var _shapeChild:Shape = null;
		private var _bitmapFill: BitmapData = null;
		private var url:String = "grid.png";
		private var loader:Loader = new Loader();
					
		public function HTML5CompLivePreview() {
			
			_shapeChild = this.getChildAt(0) as Shape;
			// constructor code
			addChild(_shape);
			//addChild(_textField);
			//this._draw();
			
            var request:URLRequest = new URLRequest(url);
            
            loader.load(request);
            loader.contentLoaderInfo.addEventListener(Event.COMPLETE, drawImage);
            //loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR, ioErrorHandler);			
		}
		
		public function drawImage(evt: Event): void {
            _bitmapFill = new BitmapData(loader.width, loader.height, false);  
            _bitmapFill.draw(loader, new Matrix());
			this._draw();
		}
		
		public function getName(): String {
			return this._name;
		}
		
		public function setName(name: String): void {
			this._name = name;
			this._draw();
		}
		
		function _draw(): void {
			if(this._bitmapFill == null)
				return;
			
			var mat = this.transform.matrix;
			mat.invert();
						
			var sw:int = Math.abs(_shapeChild.width);
			var sh:int = Math.abs(_shapeChild.height);
			var bounds: Rectangle = _shapeChild.getBounds(root);
			var p: Point = new Point(sw, sh);
			var p1: Point = mat.transformPoint(p);
			
			var sx:Number = Math.abs(p1.x / sw);
			var sy:Number = Math.abs(p1.y / sh);
			var matrix: Matrix = new Matrix();
			matrix.scale(sx, sy);
			
			trace(p1.x);
			trace(bounds.width);

			_graphics.clear();
			_graphics.lineStyle(0);
			_graphics.beginBitmapFill(_bitmapFill, matrix);
			_graphics.drawRect(0, 0, sw, sh);
			_graphics.endFill();
		}		
	}	
}
