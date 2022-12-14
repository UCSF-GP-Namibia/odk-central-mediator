const tableColumns = {
    submission_uuid: '__id',
    ptracker_id: 'ptracker_id',
    facility_code: 'facility',
    facility_name: 'facility_name',
    type: 'visit_type',
    visit_date: 'visit_date',
    visit_date_recorded_odk: 'visit_date',
    openmrs_person: 'mrs_person_uuid',
    openmrs_patient: 'mrs_patient_uuid',
    facility_uuid: 'facility_uuid',
    given: 'client_info.name.given',
    middle: 'client_info.name.middle',
    family: 'client_info.name.family',
    sex: 'client_info.name.sex',
    dob: 'client_info.dob.dateof',
    age: 'client_info.dob.yearof',
    country: 'client_info.client_contact.country',
    country_other: 'client_info.client_contact.country_other',
    district: 'client_info.client_contact.client_contact_district',
    address: 'client_info.client_contact.grpaddress.address',
    location: 'client_info.client_contact.grplocation.location',
    phone_number: 'client_info.client_contact.grpphone.phone_number',
    kin_name: 'client_info.client_contact.grpkinname.kin_name',
    kin_contact: 'client_info.client_contact.grpkincontact.kin_contact',
    // INFANT PNC PART
    infant_transfer_status: 'infantpnc.infant_transfer_status',
    infant_breastfeeding_status: 'infantpnc.pnc_breastfeeding_status',
    infant_transfer_out: 'infantpnc.infant_transfer_status_transferedto',
    infant_transfer_out_other: 'infantpnc.infant_transfer_status_transferedto_other',
    infant_transfer_out_date: 'infantpnc.grpinfanttrnsfoutdate.infant_transferout_date',
    infant_transfer_out_date_missing: 'infantpnc.grpinfanttrnsfoutdate.infant_transferout_date_missing',
    infant_transferin: 'infantpnc.infant_transferin_from',
    infant_transferin_other: 'infantpnc.infant_transferin_from_other',
    infant_transferin_date: 'infantpnc.grpinfanttrnsfdate.infant_transferin_date',
    infant_transferin_date_missing: 'infantpnc.grpinfanttrnsfdate.infant_transferin_date_missing',
    infant_next_visit_date: 'infantpnc.grpinfantnxtvisitdate.infant_next_visit_date',
    infant_next_visit_date_missing: 'infantpnc.grpinfantnxtvisitdate.infant_next_visit_date_missing',
    infant_event_date: 'infantpnc.grpinfanteventdate.infant_event_date',
    infant_event_date_missing: 'infantpnc.grpinfanteventdate.infant_event_date_missing',
    infant_transferto_artclinic_date: 'infantpnc.grpinfanttrnsfartclinicdate.infant_transferto_artclinic_date',
    infant_transferto_artclinic_date_missing: 'infantpnc.grpinfanttrnsfartclinicdate.infant_transferto_artclinic_date_missing',
    infant_transferto_artclinic: 'infantpnc.infant_transferto_artclinic',
    infant_transferto_artclinic_missing: 'infantpnc.infant_transferto_artclinic_other',
    hiv_exposure_status: 'infantpnc.hiv_exposure_status',
    arv_prophylaxis_status: 'infantpnc.arv_prophylaxis_status',
    arv_prophylaxis_adherence: 'infantpnc.arv_prophylaxis_adherence',
    ctx_prophylaxis_status: 'infantpnc.ctx_prophylaxis_status',
    ctx_prophylaxis_adherence: 'infantpnc.ctx_prophylaxis_adherence',
    infant_hiv_tested: 'infantpnc.infant_hiv_tested',
    infant_hiv_test_used: 'infantpnc.infant_hiv_test_used',
    infant_hiv_test_result: 'infantpnc.infant_hiv_test_result',
    infant_hiv_test_result_pcr: 'infantpnc.infant_hiv_test_result_pcr',
    infant_hiv_test_conf: 'infantpnc.infant_hiv_test_conf',
    infant_hiv_test_conf_result: 'infantpnc.infant_hiv_test_conf_result',
    infant_art_linked: 'infantpnc.infant_art_linked',
    art_number: 'infantpnc.grpinfantart.infant_art_number',
    art_number_missing: 'infantpnc.grpinfantart.infant_art_number_missing.',
    infant_date_death: 'infantpnc.grpinfantdeathdate.infant_date_death',
    infant_date_death_mising: 'infantpnc.grpinfantdeathdate.infant_date_death_missing',
    parent_ptracker_id:'infantpnc.id_parent',
    // MISC
    provider_uuid: 'mrs_openmrs_user_uuid',
    username: 'ptracker_username',
    submission_date: 'form_date_time',
    review_state: '__system.reviewState'
}

const visit_type = '4';
const table_name = 'PNC INFANT';

module.exports = {
    tableColumns,
    visit_type,
    table_name
}