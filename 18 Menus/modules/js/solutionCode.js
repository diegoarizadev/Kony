// Removes the menu item from second position
function removeMenuItem(){
	kony.application.removeAppMenuItemAt("MenusAppMenu", 1);
	frmMenus.show();
}

// Adds the More.. menu item at 4th position
function addMenuItem(){
	kony.application.addAppMenuItemAt("MenusAppMenu", 3, ["appMenuMore","More...","more.png",moreCallback])
	frmMenus.show();
}


// Switch IDE created App Menu with Code created App Menu
function switchAppMenu(){
	
	kony.print("########## Switch App Menu Start");
	//Creating menu items 
	itemHome = ["itemHome","Home","home.png",homeCallback,true];
	itemService = ["itemService","Services","service.png",serviceCallback,true];
	itemSetting = ["itemSetting","Settings","settings.png",settingCallback,true];
	//Setting menu items to the menubar
	kony.application.createAppMenu("appMenu2", 
								 [itemHome,itemService,itemSetting], 
								 null, null);
	//Adding menubar to application 
	kony.application.setCurrentAppMenu("appMenu2");	
	frmMenus.show();					 
	kony.print("########## Switch App Menu End");

}

//NOTE: the re-show() of the form is necessary for iOS since the app menu needs to go somewhere
//      without it, it hides the current form so you get a black screen.  The show() doesn't do
//      anything for other devices if the form is already showing.

//More CallBack
function moreCallback(){
	kony.print("########## More menu item is clicked");
	frmMenus.show();
}

//Home CallBack
function homeCallback(){
	kony.print("########## Home menu item is clicked");
	frmMenus.show();
}

//Services CallBack
function serviceCallback(){
	kony.print("########## Service menu item is clicked");
	frmMenus.show();
}

//Settings CallBack
function settingCallback(){
	kony.print("########## Setting menu item is clicked");
	frmMenus.show();
} 

//Creating two Context Menus Disable and Dismiss. Code is invoked in init event of the form
function setContextMenu(){
	// Context menus will be shown on long press of Add button 
	frmMenus.btnAdd.contextMenu = [["menu1","Disable",null,disableCntxtMenu,null],
							       ["menu2","Dismiss",null,dismissCntxtMenu,null]]
}



//disableButton CallBack
function disableCntxtMenu(){
	kony.print("########## Disable context menu is clicked");
	//Setting enable property of Add button to false
	frmMenus.btnAdd.setEnabled(false);
}

//dismissButton CallBack
function dismissCntxtMenu(){
	kony.print("########## Dismiss context menu is clicked");
	kony.print("########## Do nothing");
	
} 

//accounts Clicked
function accountsClicked(){
	kony.print("########## Accounts clicked");
	frmMenus.show();
}

//settings Clicked
function settingsClicked(){
	kony.print("########## Settings clicked");
	frmMenus.show();
}

//payments Clicked
function paymentsClicked(){
	kony.print("########## Payments clicked");
	frmMenus.show();
}