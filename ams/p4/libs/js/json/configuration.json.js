Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"P4","publishDate":"09/03/2015 21:44:07","pages":[{"id":"204a8ca5-8b9b-460e-a34e-33fcbd2d79fe","name":"P4","version":"1.0","author":"Marcos","image":"files\\diagrams\\P4.png","isSubprocessPage":false,"elements":[{"id":"e1f91b3d-2d9e-4752-a09f-3a45c6342f65","name":"DAT","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":21.0,"y":522.0}],"radius":0.0,"height":639.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"d3e3aa5c-c1fd-4cd1-b6db-3e2e4f1192b2","name":"Equipamento Recolhido","elementImage":"files\\bpmnElements\\DataObject_IsCollection.png","imageBounds":{"points":[{"x":869.0,"y":857.0}],"radius":0.0,"height":50.0,"width":90.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"0d91e879-6ca0-43f3-8193-51dd0d0caa0a","name":"Pedido de equipamento","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":434.0,"y":819.0}],"radius":0.0,"height":61.0,"width":90.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"33902c75-f620-4718-b2f9-cc9e269e9b2e","name":"Equipamento novo","elementImage":"files\\bpmnElements\\DataObject_IsCollection.png","imageBounds":{"points":[{"x":662.0,"y":855.0}],"radius":0.0,"height":50.0,"width":90.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"bce38c93-073b-4661-8824-2989c42bdde5","name":"DataStore","elementImage":"files\\bpmnElements\\DataStoreReference.png","imageBounds":{"points":[{"x":706.0,"y":557.0}],"radius":0.0,"height":50.0,"width":50.0,"shape":"rect"},"elementType":"DataStoreReference","properties":[{"name":"State","value":"","type":"text"}]},{"id":"12d97ed1-58b7-4ca3-91e0-c75caaff5d41","name":"Analisar  Intervenção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":215.0,"y":1008.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ebae2b12-2214-40d5-9df0-cd29253960f9","name":"Nova intervenção para executar","elementImage":"files\\bpmnElements\\MessageStart.png","imageBounds":{"points":[{"x":134.0,"y":1023.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageStart"},{"id":"cc87ab6f-854b-40dc-9807-f47439141294","name":"É necessário recolher equipamento?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":362.0,"y":1018.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"81a61391-74a4-4cf2-9359-46b6b928b4d5","name":"Existe equipamento recolhido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1109.0,"y":1018.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"c16cd79d-887b-4607-9905-f732d637bd91","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1455.0,"y":1022.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"480889d9-fadb-40a4-b54f-1d8e44abd2b9","name":"Pedir equipamento necessário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":337.0,"y":903.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"caffad90-9f00-4d28-b9d0-0102bb1697b1","name":"Registar o pedido","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":432.0,"y":648.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"58f86efc-04d7-4160-bee0-cc60727f39d7","name":"Devolver equipamento recolhido","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1084.0,"y":867.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e66c8437-058d-4fad-a3f8-a4750261b88b","name":"Entregar o equipamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":569.0,"y":648.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"75226ffd-c26a-48a1-9863-d394cd5e68cd","name":"Tratar do eq. recolhido","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1063.5,"y":591.0}],"radius":0.0,"height":106.0,"width":131.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","properties":[]},{"id":"1e655aef-8300-4ee4-8abb-8c646c82dc8a","name":"Pedido de equipamento","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":495.0,"y":551.0}],"radius":0.0,"height":61.0,"width":90.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"20cb4cad-b925-47f7-a713-0fdd1c99c4e7","name":"Executar a intervenção","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":730.5,"y":985.0001}],"radius":0.0,"height":108.0,"width":160.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","properties":[]},{"id":"d06f747c-c08b-4922-8716-e6821b838514","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":594.0,"y":1019.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Executar a intervenção","elementType":"SequenceFlow","properties":[]}]},{"id":"c89c3a3d-c5b1-4ab4-aa70-291ec273aa57","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1327.0,"y":1017.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Gate","elementType":"SequenceFlow","properties":[]}]},{"id":"c4aa7466-2dd4-499b-96b5-4b71dbd4c669","name":"Responsável do Armazém","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":71.0,"y":522.0}],"radius":0.0,"height":260.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d22830e8-a2c4-493d-9003-c439d6323f8d","name":"Equipa de Intervenção","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":71.0,"y":782.5}],"radius":0.0,"height":378.5,"width":30.0,"shape":"rect"},"elementType":"Lane"}]},{"id":"15629f74-dbf8-4862-b025-51b342f2028f","name":"LAMIC","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":232.0}],"radius":0.0,"height":244.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"e363da7d-c6f3-477c-841f-d97f5dae96ce","name":"Intervenção","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":217.0,"y":389.0}],"radius":0.0,"height":50.0,"width":84.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"c2473d57-7a14-4cd3-99ed-c6d66a3320de","name":"DataStore","elementImage":"files\\bpmnElements\\DataStoreReference.png","imageBounds":{"points":[{"x":767.0,"y":389.0}],"radius":0.0,"height":50.0,"width":50.0,"shape":"rect"},"elementType":"DataStoreReference","properties":[{"name":"State","value":"","type":"text"}]},{"id":"ee83762d-03ea-4da3-ad0a-6dfb185c1dbf","name":"DataStore","elementImage":"files\\bpmnElements\\DataStoreReference.png","imageBounds":{"points":[{"x":1294.0,"y":389.0}],"radius":0.0,"height":50.0,"width":50.0,"shape":"rect"},"elementType":"DataStoreReference","properties":[{"name":"State","value":"","type":"text"}]},{"id":"04ade20c-95a1-4d4a-9d33-32366693d1c0","name":"Tempo marcado para esta intervenção","elementImage":"files\\bpmnElements\\TimerStart.png","imageBounds":{"points":[{"x":93.0,"y":297.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerStart"},{"id":"36bbc622-855b-4018-b0a9-e27b2167be07","name":"Pedir atribuição de equipa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":176.0,"y":282.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a9763a17-8c88-4e88-9dd7-c5e6a6af0857","name":"Enviar dados  da intervação à equipa alocada","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":316.0,"y":275.0}],"radius":0.0,"height":75.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5ab29082-0498-4a32-a8ca-949104629d3c","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":475.0,"y":298.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"36337395-1c78-4a47-a134-7a451afd9014","name":"Event","elementImage":"files\\bpmnElements\\MessageStart.png","imageBounds":{"points":[{"x":587.0,"y":296.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageStart"},{"id":"1df45833-c251-45d2-a39f-779c6dfa6e18","name":"Remover eq. pedido do inventário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":682.0,"y":281.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c7189847-7460-48ed-848d-5175bbf3ca2d","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":830.0,"y":296.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"b1014b26-2bb2-431b-9061-ddc27bdc9eea","name":"Event","elementImage":"files\\bpmnElements\\MessageStart.png","imageBounds":{"points":[{"x":1063.34656,"y":302.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageStart"},{"id":"4f4db8cc-19ea-41c2-8a79-0b7795bc8b50","name":"Registar equipamento adicionado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1200.0,"y":287.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0419f5b7-711c-41cd-8f39-419c428026bc","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1391.0,"y":302.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"}]},{"id":"792b7765-68a9-4eef-aa0d-c87d084dad35","name":"Sistema de Gestão de Escalas","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":88.0,"y":20.0}],"radius":0.0,"height":180.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[]}],"subPages":[{"id":"75226ffd-c26a-48a1-9863-d394cd5e68cd","name":"Tratar do eq. recolhido","image":"files\\diagrams\\Tratar_do_eq_recolhido.png","isSubprocessPage":true,"elements":[{"id":"927d6ae9-0a26-4d17-8314-c6157bf0217b","name":"Equipamento é entregue ao armazém","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":324.0,"y":121.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e80e84f5-f940-484f-946e-dadf51b37f18","name":"Equipamento é destruído","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":321.0,"y":22.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"adf16998-a32e-4794-9875-2123a27344e9","name":"Inserir item no LAMIC","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":465.0,"y":136.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd"},{"id":"dce7e5b5-e530-491e-a5d5-878b69560dc3","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":467.0,"y":37.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"f90f7245-3913-41ff-81e9-d089debc734e","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":20.0,"y":137.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"b1675905-ce34-478d-a2e3-6a0172fc377c","name":"DataStore","elementImage":"files\\bpmnElements\\DataStoreReference.png","imageBounds":{"points":[{"x":344.0,"y":232.0}],"radius":0.0,"height":50.0,"width":50.0,"shape":"rect"},"elementType":"DataStoreReference","properties":[{"name":"State","value":"","type":"text"}]},{"id":"97fa8a4e-0d53-442f-91e1-bb03f5a57e35","name":"Está danificado","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":209.0,"y":132.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"839dc8cf-f391-457d-928f-7504bab93c0d","name":"Avaliar eq. recolhido","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":90.0,"y":122.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]}],"parentRef":"204a8ca5-8b9b-460e-a34e-33fcbd2d79fe"},{"id":"20cb4cad-b925-47f7-a713-0fdd1c99c4e7","name":"Executar a intervenção","image":"files\\diagrams\\Executar_a_intervencao.png","isSubprocessPage":true,"elements":[{"id":"2ae86d99-9134-4968-85bd-7c21432ebf5c","name":"Deslocar ao local descrito na Intervenção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":114.25,"y":150.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bc68d511-90f6-4d11-ba6b-695758c2a4c4","name":"Executar o trabalho descrito na Intervenção","elementImage":"files\\bpmnElements\\SubProcess_AdHoc.png","imageBounds":{"points":[{"x":270.0,"y":20.0}],"radius":0.0,"height":82.0,"width":124.0,"shape":"rect"},"elementType":"SubProcess","properties":[{"name":"AdHoc Ordering","value":"Parallel","type":"text"}]},{"id":"acddd1b9-7d2c-413d-a718-6886b30c2c49","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":20.0,"y":165.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"f8d378f1-e469-4e5d-b184-7ffdba8d753f","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":811.0,"y":165.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"}],"parentRef":"204a8ca5-8b9b-460e-a34e-33fcbd2d79fe"}]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"<< Go to Parent Process","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"204a8ca5-8b9b-460e-a34e-33fcbd2d79fe","containerName":"P4","isSubprocess":false,"elements":[{"id":"e1f91b3d-2d9e-4752-a09f-3a45c6342f65","value":"DAT"},{"id":"c4aa7466-2dd4-499b-96b5-4b71dbd4c669","value":"Responsável do Armazém"},{"id":"d22830e8-a2c4-493d-9003-c439d6323f8d","value":"Equipa de Intervenção"},{"id":"d3e3aa5c-c1fd-4cd1-b6db-3e2e4f1192b2","value":"Equipamento Recolhido"},{"id":"0d91e879-6ca0-43f3-8193-51dd0d0caa0a","value":"Pedido de equipamento"},{"id":"33902c75-f620-4718-b2f9-cc9e269e9b2e","value":"Equipamento novo"},{"id":"1e655aef-8300-4ee4-8abb-8c646c82dc8a","value":"Pedido de equipamento"},{"id":"bce38c93-073b-4661-8824-2989c42bdde5"},{"id":"12d97ed1-58b7-4ca3-91e0-c75caaff5d41","value":"Analisar  Intervenção"},{"id":"ebae2b12-2214-40d5-9df0-cd29253960f9","value":"Nova intervenção para executar"},{"id":"cc87ab6f-854b-40dc-9807-f47439141294","value":"É necessário recolher equipamento?"},{"id":"81a61391-74a4-4cf2-9359-46b6b928b4d5","value":"Existe equipamento recolhido?"},{"id":"c16cd79d-887b-4607-9905-f732d637bd91","value":""},{"id":"480889d9-fadb-40a4-b54f-1d8e44abd2b9","value":"Pedir equipamento necessário"},{"id":"caffad90-9f00-4d28-b9d0-0102bb1697b1","value":"Registar o pedido"},{"id":"58f86efc-04d7-4160-bee0-cc60727f39d7","value":"Devolver equipamento recolhido"},{"id":"e66c8437-058d-4fad-a3f8-a4750261b88b","value":"Entregar o equipamento"},{"id":"75226ffd-c26a-48a1-9863-d394cd5e68cd","value":"Tratar do eq. recolhido"},{"id":"20cb4cad-b925-47f7-a713-0fdd1c99c4e7","value":"Executar a intervenção"},{"id":"d06f747c-c08b-4922-8716-e6821b838514","value":""},{"id":"c89c3a3d-c5b1-4ab4-aa70-291ec273aa57","value":""},{"id":"bd74e2d6-6686-4e5c-b3e3-5ea381d98c8c"},{"id":"8be84607-7e01-4637-ac90-c69a669b6dde"},{"id":"80e307f1-a6a0-41b6-9956-9cb622be3d34"},{"id":"3703ad7e-980c-47ed-a66e-0f3912c4800f"},{"id":"2427c10f-5d1d-4613-8fb6-cd9f1323c6e0"},{"id":"233a275b-5f4a-4516-a14f-c6988453354d"},{"id":"60836b83-dc05-4fa4-a18a-11a53a4935c0"},{"id":"e9c43be7-917d-4bee-aede-7e2dba898a4f"},{"id":"9856c879-347f-4915-bf16-256034383f89"},{"id":"15629f74-dbf8-4862-b025-51b342f2028f","value":"LAMIC"},{"id":"e363da7d-c6f3-477c-841f-d97f5dae96ce","value":"Intervenção"},{"id":"c2473d57-7a14-4cd3-99ed-c6d66a3320de"},{"id":"ee83762d-03ea-4da3-ad0a-6dfb185c1dbf"},{"id":"04ade20c-95a1-4d4a-9d33-32366693d1c0","value":"Tempo marcado para esta intervenção"},{"id":"36bbc622-855b-4018-b0a9-e27b2167be07","value":"Pedir atribuição de equipa"},{"id":"a9763a17-8c88-4e88-9dd7-c5e6a6af0857","value":"Enviar dados  da intervação à equipa alocada"},{"id":"5ab29082-0498-4a32-a8ca-949104629d3c","value":""},{"id":"36337395-1c78-4a47-a134-7a451afd9014","value":""},{"id":"1df45833-c251-45d2-a39f-779c6dfa6e18","value":"Remover eq. pedido do inventário"},{"id":"c7189847-7460-48ed-848d-5175bbf3ca2d","value":""},{"id":"b1014b26-2bb2-431b-9061-ddc27bdc9eea","value":""},{"id":"4f4db8cc-19ea-41c2-8a79-0b7795bc8b50","value":"Registar equipamento adicionado"},{"id":"0419f5b7-711c-41cd-8f39-419c428026bc","value":""},{"id":"30c9fd72-55e0-4746-ace5-20cedc3924f9"},{"id":"d556b7a9-1cac-46c9-9dd6-67eee93995da"},{"id":"bfccc8b6-ae17-4532-9498-e922ab74a9ce"},{"id":"07399afe-71c5-4b7b-abcd-7a3da024d596"},{"id":"792b7765-68a9-4eef-aa0d-c87d084dad35","value":"Sistema de Gestão de Escalas"}]},{"containerId":"75226ffd-c26a-48a1-9863-d394cd5e68cd","containerName":"Tratar do eq. recolhido","isSubprocess":true,"elements":[{"id":"f90f7245-3913-41ff-81e9-d089debc734e","value":""},{"id":"dce7e5b5-e530-491e-a5d5-878b69560dc3","value":""},{"id":"839dc8cf-f391-457d-928f-7504bab93c0d","value":"Avaliar eq. recolhido"},{"id":"97fa8a4e-0d53-442f-91e1-bb03f5a57e35","value":"Está danificado"},{"id":"adf16998-a32e-4794-9875-2123a27344e9","value":"Inserir item no LAMIC"},{"id":"b1675905-ce34-478d-a2e3-6a0172fc377c"},{"id":"e80e84f5-f940-484f-946e-dadf51b37f18","value":"Equipamento é destruído"},{"id":"927d6ae9-0a26-4d17-8314-c6157bf0217b","value":"Equipamento é entregue ao armazém"},{"id":"02a979bc-8a74-413f-969a-e94cfee1be01","value":"Equipamento Recolhido"},{"id":"d34dd8a1-40bd-439c-b7e3-8519c2b0e91e"},{"id":"7f95c338-3eab-48ea-a5d2-f9de0eba651d"}]},{"containerId":"20cb4cad-b925-47f7-a713-0fdd1c99c4e7","containerName":"Executar a intervenção","isSubprocess":true,"elements":[{"id":"acddd1b9-7d2c-413d-a718-6886b30c2c49","value":""},{"id":"f8d378f1-e469-4e5d-b184-7ffdba8d753f","value":""},{"id":"bc68d511-90f6-4d11-ba6b-695758c2a4c4","value":"Executar o trabalho descrito na Intervenção"},{"id":"2ae86d99-9134-4968-85bd-7c21432ebf5c","value":"Deslocar ao local descrito na Intervenção"}]},{"containerId":"bc68d511-90f6-4d11-ba6b-695758c2a4c4","containerName":"Executar o trabalho descrito na Intervenção","isSubprocess":true,"elements":[{"id":"2d1cf529-8bb1-4617-ac9a-2bca8dee65cc","value":"É necessário a manutenção de eq. existente?"},{"id":"b6c77f80-de36-4c85-99e4-63e2ed6ac150","value":"Manutenção do eq. existente"},{"id":"6298ec14-fe2e-4497-9a7d-d9be084a9ecd","value":"É necessário recolher equipamento?"},{"id":"8aa200d8-1725-4c43-b190-564038c07440","value":"Recolher equipamento"},{"id":"f7d1ec68-03ac-49ca-9f7e-af4324115a58","value":"Equipamento Recolhido"},{"id":"6f5af32f-3f39-4bdf-a819-fc17a4cb8135","value":"Equipamento novo"},{"id":"61524ce6-91ec-48ee-a8d3-704881d593a4","value":"Instalar equipamento novo"},{"id":"1351a2d0-edde-4180-94ba-c06608d79296","value":"Existe equipamento novo?"},{"id":"34b72678-168d-4277-8994-cadb3486e512"},{"id":"59592777-8076-447a-b3aa-d8b1c5cc5052"}]}]}