import { default as mongoose } from "mongoose";
import { ObjectId } from 'mongodb';
const MyModel = mongoose.model('overpayments', new mongoose.Schema({ type: String }));
const MRRModel = mongoose.model('medicalrecordrequests', new mongoose.Schema({ status: String }));

class RulesPage {
    get rulesTab() {
        return $("//button[normalize-space()='Rules']");
    }
    get firstRowInventory() {
        return $("//p-table[@datakey='paginatedInventories']//tr[1]//td[1]//span[@class='hyperlink']");
    }
    get rulesTabInstruction() {
        return $("//p[@class='p-text']");
    }
    get noRulesTitle() {
        return $("//div[@class='title']");
    }
    get noRulesSubtitle() {
        return $("//div[@class='sub-title']");
    }
    get backButton() {
        return $("//button//span[text() = 'Back']");
    }
    get deleteIcon() {
        return $("//span[@class='icon-delete']");
    }
    get deleteButtonOnPopup() {
        return $("//button[normalize-space()='Delete']");
    }
    get createNewRuleButtonOnNoRulesScreen() {
        return $("//button[normalize-space()='Create New Rule']");
    }
    get createNewRuleButtonOnRuleCreateScreen() {
        return $("//span[normalize-space()='Create New Rule']");
    }
    get newRuleHeader() {
        return $("//h3[normalize-space()='New Rule']");
    }
    get rulesForDropdown() {
        return $("//ng-select[@id='app-shared-dropdown-id']");
    }
    get inventoryTypeDropdown() {
        return $("//ng-select[@id='app-query-builder-collection']");
    }
    get inventoryTypeSelectedValue() {
        return $("//ng-select[@id='app-query-builder-collection']//span[@class='ng-value-label']");
    }
    get datasetDropdown() {
        return $("//ng-select[@id='dataset']");
    }
    get sortByDropdown() {
        return $("//ng-select[@id='app-query-builder-sortBy']");
    }
    get selectFieldDropdown() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Field']");
    }
    get additionalSelectFieldDropdown() {
        return $("(//ng-select[@id='app-custom-dropdown-Select-Field'])[2]");
    }
    get globalClearButton() {
        return $("//button[@id='app-query-builder-clearQuery']");
    }
    get fieldsClearButton() {
        return $("//button[@class='btn btn-xs clear-btn']");
    }
    get queryAndButton() {
        return $("//button[normalize-space()='And']");
    }
    get addQueryButton() {
        return $("//button[@class='btn btn-xs filter-btn']");
    }
    get deleteRuleButton() {
        return $("//app-common-button[@id='app-query-builder-deleteQuery']");
    }
    get saveRuleButton() {
        return $("//app-common-button[@id='app-query-builder-saveQuery']//button[@id='notSubmitButton']");
    }
    get searchRuleButton() {
        return $("//app-common-button[@id='app-query-builder-executeSearch']//button[@id='notSubmitButton']");
    }
    get projectedResultsLabel() {
        return $("//span[@class='result']");
    }
    get newRuleTitle() {
        return $("//div[@class='title']");
    }
    get newRuleDescription() {
        return $("//div[@class='description']");
    }
    get rulesForDropdownValues() {
        return $$("//div[@role = 'option']//span");
    }
    get operatorDropdownField() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Operator']");
    }
    get fieldValueSelectionDropdown() {
        return $("//ng-select[@id='app-code-list-dropdown-Service-Lines']");
    }
    get selectedDatasetValue() {
        return $("//span[normalize-space()='Demo Data']");
    }
    get selectedSortByOption() {
        return $("//span[normalize-space()='Dataset']");
    }
    get datasetPlaceholder() {
        return $("//div[normalize-space()='Select Dataset']");
    }
    get sortByPlaceholder() {
        return $("//div[contains(text(),'Select a Field to sort by')]");
    }
    get projectedResultCount() {
        return $("//span[@class='count-css']");
    }
    get ruleNameHeader() {
        return $("//h3[normalize-space()]");
    }
    get firstCardName() {
        return $("(//div[@class='card-details']//div[@class = 'title'])[1]");
    }
    get firstCardDescription() {
        return $("(//div[@class='card-details']//app-read-more-toggle)[1]");
    }
    get secondCardName() {
        return $("(//div[@class='card-details']//div[@class = 'title'])[2]");
    }
    get secondCardDescription() {
        return $("(//div[@class='card-details']//app-read-more-toggle)[2]");
    }
    get firstCardDragButton() {
        return $("(//span[@class='cdk-drag-handle icon-drag-handles'])[1]");
    }
    get secondSelectField() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Field']//div[@class='ng-select-container']");
    }
    get secondFieldOperand() {
        return $("//ng-select[@id='status']//div[@class='ng-select-container']");
    }
    get searchingLoader() {
        return $("//span[@class='icon-inprogress']");
    }
    //Save Rule modal xpaths
    get saveRuleModalHeader() {
        return $("//div//span[ text() = ' Save Rule ']");
    }
    get ruleNameFieldLabel() {
        return $("//span[normalize-space()='Rule Name*']");
    }
    get descriptionLabel() {
        return $("//span[normalize-space()='Rule Description*']");
    }
    get enterRuleNameField() {
        return $("//input[@placeholder='Enter Rule Name']");
    }
    get descriptionField() {
        return $("//textarea[@id='comment']");
    }
    get modalSaveRuleButton() {
        return $("//app-common-button[@id='saveQuery']");
    }
    get modalCancelButton() {
        return $("//app-common-button[@id='cancelQuery']");
    }
    get ruleNameValidationMessage() {
        return $("//span[contains(text(),'Please enter rule name.')]");
    }
    get descriptionValidationMessage() {
        return $("//span[contains(text(),'Please enter rule description.')]");
    }
    //Update rule modal xpaths
    get updateRuleModalHeader() {
        return $("//span[normalize-space()='Update Rule']");
    }
    get updateRuleButton() {
        return $("//app-common-button[@id='updateQuery']");
    }
    //Query results xpaths
    get queryCategoryLabel() {
        return $("//label[normalize-space()='Query Category']");
    }
    get queryCategoryDropdown() {
        return $("//ng-select[@id='app-code-list-dropdown-Query-Categories']");
    }
    get queryCategoryDefaultValue() {
        return $("//ng-select[@id='app-code-list-dropdown-Query-Categories']//span[@class='ng-value-label']");
    }
    get tooltipForProjectedResults() {
        return $("//app-info-tooltip[@tooltipstyleclass='team-tooltip']");
    }
    get queryIdOption() {
        return $("//span[normalize-space()='Query ID']");
    }
    get queryNameOption() {
        return $("//span[normalize-space()='Query Name']");
    }
    get queryStatusOption() {
        return $("//span[normalize-space()='Query Status']");
    }
    get queryConceptOption() {
        return $("//span[normalize-space()='Concept']");
    }
    get queryProjectOption() {
        return $("//span[normalize-space()='Project']");
    }
    get queryPaymentTimingOption() {
        return $("//span[normalize-space()='Payment Timing']");
    }
    get queryQueryCloseReasonOption() {
        return $("//span[normalize-space()='Query Close Reason']");
    }
    get selectedOperatorValue() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Operator']//span[@class ='ng-value-label']")
    };
    get clearSelectDropdown() {
        return $("//span[@title='Clear all']")
    };
    get queryNameValueDropdown() {
        return $("//ng-select[@id='query']//div[@class='ng-select-container']")
    };
    get selectConceptDropdown() {
        return $("//ng-select[@id='concept']//input[@role='combobox']")
    };
    get valuesFromOperandDropdown() {
        return $$("//div[@role= 'option']")
    };
    get selectProjectsDropdown() {
        return $("//ng-select[@id='projects']//input[@role='combobox']")
    };
    get selectPaymentTiming() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Payment-Timing']//input[@role='combobox']")
    };
    //MRR Inventory type element xpath
    get mrStatusDropdown() {
        return $("//ng-select[@id='status']//input[@role='combobox']")
    };
    get operandField() {
        return $("//input[@type='number']")
    };
    get secondFieldOperator() {
        return $("//ng-select[@id='app-custom-dropdown-Select-Operator']//div[@class='ng-select-container']")
    };
    get duplicateRuleErrorToaster() {
        return $("(//div[contains(@class, 'snotifyToast')])[1]");
    }
    //Functions
    async datasetValues() {
        try {
            const MyModel = mongoose.model('datasets', new mongoose.Schema({ name: String }));
            var datasets = await MyModel.aggregate([
                { "$unwind": "$name" },
                { $sort: { "name": 1 } },
                { "$group": { "_id": null, name: { $push: "$name" } } },
                { "$project": { name: true, _id: false } }
            ])
            var datasetArray = [];
            for (let i = 0; i < datasets.length; i++) {
                datasetArray.push(datasets[i]["name"]);
            }
            const datasetsFinalArray = datasetArray.toString();
            return datasetsFinalArray;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getResultRecordCountFromDB() {
        try {
            var count = await MyModel.where({ 'type': 'Claims Queries', "datasetId": new ObjectId("55fc2c4745cc5ab889011257") }).countDocuments();
            return count;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getAuditResultRecordCountFromDBForMultipleFilters() {
        try {
            var count = await MyModel.where({ 'type': 'Claims Queries', 'status.code': 'Ready', "datasetId": new ObjectId("55fc2c4745cc5ab889011257") }).countDocuments();
            return count;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getConceptsFromDB() {
        try {
            const MyModel = mongoose.model('vendorconcepts', new mongoose.Schema({ name: String }));
            var conceptsArray = await MyModel.aggregate([
                { "$unwind": "$name" },
                { "$group": { "_id": "$name", "doc": { "$first": "$$ROOT" } } },
                {
                    "$replaceRoot": {
                        "newRoot": "$doc"
                    }
                },
                { "$sort": { "name": 1 } }
            ]);
            var finalArrayForConcepts = [];
            for (let i = 0; i < conceptsArray.length; i++) {
                finalArrayForConcepts.push(conceptsArray[i]["name"]);
            }
            const concepts = finalArrayForConcepts.toString();
            return concepts;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getProjectsFromDB() {
        try {
            const MyModel = mongoose.model('projects', new mongoose.Schema({ name: String }));
            var projectsArray = await MyModel.aggregate([
                { $sort: { "description": 1 } },
                { "$unwind": "$description" },
                { "$group": { "_id": null, description: { $push: "$description" } } }
            ]);
            var finalArrayForProjects = [];
            for (let i = 0; i < projectsArray.length; i++) {
                finalArrayForProjects.push(projectsArray[i]["description"]);
            }
            const projects = finalArrayForProjects.toString();
            return projects;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getMRRRecordCountFromDB() {
        try {
            var count = await MRRModel.where({ 'status': 'Findings Identified' }).countDocuments();
            return count;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
    async getMRRRecordCountFromDBByApplyingMultipleFilters() {
        try {
            var count = await MRRModel.where({ 'status': 'Findings Identified', "amounts.totalPaid": { $gt: 100 } }).countDocuments();
            return count;
        } catch (error) {
            fail("Failed due to exception " + error);
        }
    }
}
export default new RulesPage();