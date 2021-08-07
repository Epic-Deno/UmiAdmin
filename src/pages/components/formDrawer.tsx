/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-07-02 23:36:37
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-07-03 00:58:17
 */
import React, { useState } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, message, Radio } from 'antd';
import { connect } from 'umi';

const FormTables = ({ dispatch, visible, flg, getShow, entityValues,entityCode }) => {
    console.log(entityCode,'entityCode')
  const [form] = Form.useForm();
  const [sourceTable,setSourceTable]=useState([])
  const [entityName,setEntityName]=useState([])

  console.log(entityName,'entityList111')

  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
          console.log(values,'values555555')
        form.resetFields();
        getShow(visible);
        dispatch({
          type: `formCreateEntityForm/getCreateEntity`,
          payload: {
            entityId: flg ? 0 : entityValues.entityId,
            sourceSystemCode:values.sourceSystemCode,
            sourceEntityName: values.sourceEntityName,
            edipEntityName: entityName,
            entityTableSchema: 'dbo',
            entityType: 'Table',
            allowPublish: values.allowPublish,
            isEnable: values.isEnable,
            entityDataType: '1',
            currentVersion: 1,
            userId: JSON.parse(window.localStorage.getItem('accessToken')).userId,
          },
        }).then((res) => {
          message.success(`${res.result.msg}`);
          dispatch({
            type: 'formEntityForm/getEntityList',
            payload: [],
          });
        });
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };
 

  const handleChange = value => {
    let targetObj = entityCode.find(i => i['sourceSystemCode'] == value);
    changeForms({
      value1: value,
      value2: '',
      value3: ''
    });

    setSourceTable(targetObj['sourceTables']);
  };
  const handleChange2 = value => {
    const { value1 } = forms;
    let targetObj = sourceTable.find(i => i['sourceEntityName'] == value);
    const { edipEntityName } = targetObj;
    console.log(targetObj,'targetObj22')
    changeForms({
      value1,
      value2: value,
      value3: edipEntityName
    });
    setEntityName([
      {
        edipEntityName
      }
    ]);
  };

  const handleChange3 = value => {
    const { value1, value2 } = forms;
    changeForms({
      value1,
      value2,
      value3: value
    });
  };
  
  return (
    <Drawer
      title={flg ? 'Create a new Entity' : 'Edit Entity'}
      width={720}
      onClose={() => {
        getShow(visible);
      }}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button
            onClick={() => {
              getShow(visible);
            }}
            style={{ marginRight: 8 }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              onSubmit();
            }}
            type="primary"
          >
            Submit
          </Button>
        </div>
      }
    >
      <Form
        layout="vertical"
        hideRequiredMark
        form={form}
        initialValues={{
          sourceEntityName: entityValues.sourceEntityName,
          edipEntityName: entityValues.edipEntityName,
        //   entityTableSchema: entityValues.entityTableSchema,
        //   entityType: entityValues.entityType,
          allowPublish: entityValues.allowPublish,
          isEnable: entityValues.isEnable,
        }}
      >
          {
              flg ? <Row gutter={16}>
              <Col span={12}>
                  <Form.Item
                  name="sourceSystemCode"
                  label="sourceSystemCode"
                  rules={[
                      { required: true, message: '不能为空' },
                  ]}
                  >
                  <Select 
                  placeholder="Please select an owner" 
                  /* onChange={(value)=>{
                    entityCode.forEach(item=>{
                        if(value===item.sourceSystemCode){
                          setSourceTable(item.sourceTables)
                        }
                        
                      })
                  }} */
                  onChange={handleChange}
                  disabled={flg ? '' : 'disabled'}>
                      {
                          entityCode.map((item,index)=>{
                              return <Select.Option value={item.sourceSystemCode} key={index} >{item.sourceSystemCode}</Select.Option>
                          })
                      }
                  </Select>
                  </Form.Item>
              </Col>
          </Row>:''
          }
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="sourceEntityName"
              label="sourceEntityName"
              rules={[
                { required: true, message: '不能为空' }
              ]}
            >
              <Select 
              placeholder="Please select an owner" 
              /* onChange={(value)=>{
                sourceTable.forEach(item=>{
                    if(value===item.sourceEntityName){
                      setEntityName(item.edipEntityName)
                    }
                })
              }}  */
              onChange={handleChange2}
              disabled={flg ? '' : 'disabled'}>
                  {
                      sourceTable.map(item=>{
                          return <Select.Option value={item.sourceEntityName}>{item.sourceEntityName}</Select.Option>
                      })
                  }
                
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="edipEntityName"
              label="edipEntityName"
              rules={[
                { required: true, message: '不能为空' }
              ]}
            >
                <Select 
                  placeholder="Please select an owner" 
                  defaultValue={entityName}
                  key={entityName}
                  onChange={handleChange3}
                >  
                {
                          entityName.map((item,index)=>{
                              return <Select.Option value={item.sourceSystemCode} key={index} >{item.sourceSystemCode}</Select.Option>
                          })
                      }
                </Select>
            </Form.Item>
          </Col>
        </Row>
        
        {flg ? (
          ''
        ) : (
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="allowPublish" label="allowPublish">
                <Radio.Group>
                  <Radio value={1}>是</Radio>
                  <Radio value={0}>否</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="isEnable" label="isEnable">
                <Radio.Group>
                  <Radio value={1}>是</Radio>
                  <Radio value={0}>否</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        )}
      </Form>
    </Drawer>
  );
};

export default connect(({ formCreateEntityForm, loading }) => ({
  formCreateEntityForm,
  loading: loading.models.formCreateEntityForm,
}))(FormTables);
