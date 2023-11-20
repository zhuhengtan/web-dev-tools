import React, { useState, useMemo } from 'react'
import FormRender, { FRProps, useForm } from 'form-render'

const ZhuJianShanZhuang: React.FC = () => {
  const form = useForm()
  const schema = useMemo<FRProps['schema']>(
    () => ({
      type: 'object',
      properties: {
        cangkuTong: {
          type: 'number',
          title: '仓库 铜',
        },
        cangkuTie: {
          type: 'number',
          title: '仓库 铁',
        },
        cangkuYin: {
          type: 'number',
          title: '仓库 银',
        },
        cangkuJin: {
          type: 'number',
          title: '仓库 金',
        },
        duandafangTong: {
          type: 'number',
          title: '锻打房 铜',
        },
        duandafangTie: {
          type: 'number',
          title: '锻打房 铁',
        },
        duandafangYin: {
          type: 'number',
          title: '锻打房 银',
        },
        duandafangJin: {
          type: 'number',
          title: '锻打房 金',
        },
        huolufangTong: {
          type: 'number',
          title: '火炉房 铜',
        },
        huolufangTie: {
          type: 'number',
          title: '火炉房 铁',
        },
        huolufangYin: {
          type: 'number',
          title: '火炉房 银',
        },
        huolufangJin: {
          type: 'number',
          title: '火炉房 金',
        },
      },
    }),
    []
  )

  const [formData, setFormData] = useState({
    cangkuJin: 0,
    cangkuTie: 0,
    cangkuTong: 0,
    cangkuYin: 0,
    duandafangJin: 0,
    duandafangTie: 0,
    duandafangTong: 0,
    duandafangYin: 0,
    huolufangJin: 0,
    huolufangTie: 0,
    huolufangTong: 0,
    huolufangYin: 0,
  })

  return (
    <div
      style={{
        width: 300,
        margin: '0 auto',
      }}
    >
      <h3>烟雨江湖-铸剑山庄 仓库清点工具</h3>
      <FormRender
        displayType="row"
        labelAlign="right"
        labelWidth={120}
        form={form}
        schema={schema}
        watch={{
          '#': (values) => {
            setFormData(values)
          },
        }}
      />
      <p>总计</p>
      <p>
        铜：
        {(formData.cangkuTong || 0) +
          (formData.huolufangTong || 0) +
          (formData.duandafangTong || 0)}
      </p>
      <p>
        铁：
        {(formData.cangkuTie || 0) +
          (formData.huolufangTie || 0) +
          (formData.duandafangTie || 0)}
      </p>
      <p>
        银：
        {(formData.cangkuYin || 0) +
          (formData.huolufangYin || 0) +
          (formData.duandafangYin || 0)}
      </p>
      <p>
        金：
        {(formData.cangkuJin || 0) +
          (formData.huolufangJin || 0) +
          (formData.duandafangJin || 0)}
      </p>
    </div>
  )
}

export default React.memo(ZhuJianShanZhuang)
