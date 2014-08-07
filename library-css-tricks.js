window.onload = function(){
	/*
		Class Radio предназначен для  кастомизации элементов input[type="radio"]
		для создания экземпляра класса необходимо задать три параметра:
			1.класс input[type="radio"] (обязательный аргумент)
			2. класс активного элемента для предания необходимых css свойств.(не обязательный)
			2. класс пассивного элемента для предания необходимых css свойств.(не обязательный)
		Пример:
		var radio = new Radio('radio-buttom', 'radio-buttom-active', 'radio-buttom-wrapper');
		Создается обертка для элемента input c классом типа:
		.radio-buttom-wrapper(к классу input добовляется слово -wrapper(если вы не передали значение)),
		так же и к активному классу.
	*/
	function Radio(elem, activeClass, passiveClass){
		var _self = this;
		this._elem = document.querySelectorAll('.' + elem);
		passiveClass = (passiveClass) ? passiveClass : elem + '-wrapper';
		activeClass = (activeClass) ? activeClass: elem + '-active';
		/*Назначим публичный метод onclick для коллекции RadioGroup*/
		for(var i = 0; i < this._elem.length; i++ ){
			var span = document.createElement('span');
			span.className = passiveClass;
			this._elem[i].parentNode.insertBefore(span, this._elem[i]);
			span.appendChild(this._elem[i]);
			//Публичный метод нажатия мыши по Radio кнопке
			this._elem[i].parentNode.onclick = function(){
				var nameClass = this.className;
				var arrElem = _self._elem;
				if(nameClass == passiveClass){
					for( var i = 0; i < arrElem.length; i++){
						//Проверка на включение только одного значения Radio среди всех одинаковых аттрибутов
						if( arrElem[i].getAttribute('name') == this.children[0].getAttribute('name')){
							arrElem[i].parentNode.className = passiveClass;
						}
					}
				}
				//Включение активного класса т.е Radio-checked
				this.className = passiveClass +' '+ activeClass;
			}
		}
	}

	/*
	Class Checkbox предназначен для  кастомизации элементов input[type="checkbox"]
		для создания экземпляра класса необходимо задать три параметра:
			1.класс input[type=checkbox] (обязательный аргумент)
			2. класс активного элемента для предания необходимых css свойств.(не обязательный)
			2. класс пассивного элемента для предания необходимых css свойств.(не обязательный)
		Пример:
		var checkbox = new Checkbox('checkbox-buttom', ' check-buttom-active', 'checkbox-buttom'-wrapper');
		Создается обертка для элемента input c классом типа:
		.checkbox-buttom-wrapper(к классу input добовляется слово -wrapper(если вы не передали значение)),
		так же и к активному классу.
	*/
	function Checkbox(elem, activeClass, passiveClass){
		//Поиск всех элементов для замены стиля отображения
		this._elem = document.querySelectorAll('.' + elem);
		passiveClass = (passiveClass) ? passiveClass : elem + '-wrapper';
		activeClass = (activeClass) ? activeClass: elem + '-active';
		/*Назначим публичный метод onclick для коллекции Checkbox*/
		for(var i = 0; i < this._elem.length; i++ ){
			var span = document.createElement('span');
			span.className = passiveClass;
			this._elem[i].parentNode.insertBefore(span, this._elem[i]);
			span.appendChild(this._elem[i]);
			//Публичный метод нажатия мыши по Checkbox элементу
			this._elem[i].parentNode.onclick = function(){
				var nameClass = this.className;
				if(nameClass == passiveClass){
					this.className = passiveClass + activeClass;
				}else{
					this.className = passiveClass;
				}
			}
		}
	}

}