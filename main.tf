resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.resource_group_location
}

resource "azurerm_static_web_app" "swa" {
  name                = var.static_web_app_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.static_web_app_location

  sku_tier = "Free"
  sku_size = "Free"
}
