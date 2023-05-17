import { SvgIconComponent } from '@mui/icons-material'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
export interface IDictionaryData {
    Data:IDictionaryCard[],
    NextPage: number
}

export interface IGridActions{
    label:string,
    color:any
}
export interface IDictionaryMappingEditorRequestData{
    DestinationDatasetId: number,
    SourceDatasetId: number | null,
    ForView: boolean
}
export interface IDictionaryMappingEditorResponseData{
    DictionaryMappings: IDictionaryMappings[],
    FunctionalCategories: IFunctionalCategories[],
    DataTypes: IDataTypes[],
    SourceColumns: ISourceColumns[],
    LookupEntities: ILookupAndFrequencies[],
    Frequencies: ILookupAndFrequencies[]
}
export interface IDictionaryMappings{
        Id: number,
        MappingId: null,
        DictionaryColumnName: string,
        DictionaryDisplayColumnName: string,
        ColumnDataType: string,
        DateFormat: string,
        FunctionalCategory: null,
        Description: string,
        Mandatory: null,
        Unique: null,
        Primary: null,
        PII: null,
        Custom: false,
        SourceColumn: null,
        MapTypeId: null,
        MapType: null,
        LookupEntity: null,
        LookupAttribute: null,
        Frequency: null,
        Lookup: false,
        IsUpdated: false,
        IsSelected: false,
        RadObject: null,
        CalcRes: null
}
export interface IFunctionalCategories{
    CategoryId: number,
    Category: string
}
export interface IDataTypes{
    DataType: string
}
export interface ISourceColumns{
    DataType: string,
    Id: number,
    Name: string
}
export interface ILookupAndFrequencies{
    Id: number,
    Name: string
}
export interface IDictionaryCard {
    DictionaryId: number,
    DictionaryName: string,
    DestinationDatasetId: number,
    SourceDatasetId: number,
    IsStandard: boolean,
    IsMapped: number,
    SourceDataSetName: string,
    DestinationDataSetName: string,
    TableName: string,
    DataSetTypeName: string,
    Source: string,
    SourceType: string,
    RelationId: string,
    MappedSource: [],
    MappedDestination: []
}

export interface ICardAction {
    name: SvgIconComponent
}
export interface IDictionaryCardAction {
    icon: IconProp,
    name: string
}

export interface IDictionarySource {
    name: string,
    type: string
}
