output "static_web_url" {
  value = azurerm_static_web_app.swa.default_host_name
}

output "api_key" {
  value = azurerm_static_web_app.swa.api_key
  sensitive = true
}