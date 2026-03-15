Project setup instructions.
1. รัน docker-compose up เพื่อเริ่มการทำงาน App และ Database
2. ดู Database ได้จาก pgadmin4 ที่ localhost:5050 ใช้ 
    Email : admin@admin.com
    PAssword : root
3. สร้าง server ดู Database ตั้งเป็น
    localhost : postgres_container
    User : root
    Password : 123456
    
Key architectural
1. ใช้ Postgresql เป็น Database
2. Front-End ใช้ React Vite
3. Back-End ใช้ Nest.js
4. ส่วนของ ORM ใช้ Sequlize ในการติดต่อใช้งาน Database