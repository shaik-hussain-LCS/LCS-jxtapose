variable "resource_group_name" {
  type        = string
  description = "Name of the resource group"
  default     = "jxtapose-com"
}

variable "resource_group_location" {
  type        = string
  description = "Azure region for resource group"
  default     = "Central India"
}

variable "static_web_app_name" {
  type        = string
  description = "Name of the Static Web App"
  default     = "jxtapose-com-app"
}
variable "static_web_app_location" {
  type        = string
  description = "Azure region for Static Web App"
  default     = "Central US"
}
