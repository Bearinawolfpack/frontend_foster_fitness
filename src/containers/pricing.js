import React from 'react'
import Layout from '../components/layout'
import ServicesCard from '../components/cards/services_card'

class Pricing extends React.Component{
    state = { stateService: [] }

    componentDidMount(){
        fetch('http://localhost:3000/services')
        .then(resp => resp.json())
        .then(services => this.setState({stateService: services}))
    }
    render(){
        let gymServices = this.state.stateService.map(service => <ServicesCard service={service} key={service.id}/>)

        return(
            <Layout>
                {gymServices}
            </Layout>
        )
    }
}


export default Pricing