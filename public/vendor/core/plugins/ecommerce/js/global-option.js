(()=>{"use strict";$((function(){({currentType:"N/A",init:function(){this.initFormFields($(".option-type").val()),this.eventListeners(),$(".option-sortable").sortable({stop:function(){$(".option-sortable").sortable("toArray",{attribute:"data-index"}).map((function(t,n){$('.option-row[data-index="'+t+'"]').find(".option-order").val(n)}))}})},addNewRow:function(){return $(document).on("click",".add-new-row",(function(t){var n=$(this).parent().find("table tbody"),i=n.find("tr").last().clone(),e="options["+n.find("tr").length+"][option_value]",o="options["+n.find("tr").length+"][affect_price]",r="options["+n.find("tr").length+"][affect_type]";i.find(".option-label").attr("name",e),i.find(".affect_price").attr("name",o),i.find(".affect_type").attr("name",r),n.append(i)})),this},removeRow:function(){return $(".option-setting-tab").on("click",".remove-row",(function(){if(!($(this).parent().parent().parent().find("tr").length>1))return!1;$(this).parent().parent().remove()})),this},eventListeners:function(){this.onOptionChange(),this.addNewRow().removeRow()},onOptionChange:function(){var t=this;$(".option-type").change((function(){var n=$(this).val();this.currentType=n,t.initFormFields(n)}))},initFormFields:function(t){if(this.currentType=t,"N/A"!==t){var n=(t=t.split("\\"))[t.length-1];"Field"!==n&&(n="multiple"),$(".empty, .option-setting-tab").hide(),n="#option-setting-"+n.toLowerCase(),$(n).show()}}}).init()}))})();