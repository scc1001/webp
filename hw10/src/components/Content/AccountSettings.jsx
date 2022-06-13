import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="iid">
        <FormLabel>id</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          placeholder="0254189"
        />
      </FormControl>
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="CHIN-CHUN" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="SU" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>html_url</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          placeholder="https://github.com/scc1001/webp.git"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="B0929016@cgu.edu.tw"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>location</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          placeholder="Taiwan"
        />
      </FormControl>
    </Grid>
  )
}

export default AccountSettings
