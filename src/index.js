import {CreateUser} from './mongodb/Controllers/user' 
require('./mongodb/mongoose')
require('./express/express')


CreateUser('admin','admin',false,'091899084','Avenida Pablo Rios N47','Manera','Carlos','no tiene aun',null)