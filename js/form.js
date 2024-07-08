document.getElementById('projectType').addEventListener('change', function() {
    var continuingDetails = document.getElementById('continuingDetails');
    if (this.value === 'continuing') {
        continuingDetails.style.display = 'block';
    } else {
        continuingDetails.style.display = 'none';
    }
});

document.getElementById('strategy').addEventListener('change', function() {
    var strategy = this.value;
    var tactics = document.getElementById('tactics');
    tactics.style.display = 'block';
    var tacticsHTML = '';
    if (strategy === '1') {
        tacticsHTML = '<div class="form-group"><label for="tactic">กลยุทธ์:</label><select id="tactic" name="tactic" required><option value="">เลือกกลยุทธ์</option><option value="1.1">1.1  จัดสรรและถือครองที่ดินเพื่อการเกษตร รวมถึงการคุ้มครองพื้นที่เกษตรกรรม</option><option value="1.2">1.2 บริหารจัดการทรัพยากรน้ำและดิน เพื่อการเกษตรและบริหารจัดการป่าชุมชน</option><option value="1.3">1.3 ส่งเสริมการผลิตสินค้าเกษตร เพื่อความมั่นคงด้านอาหารและโภชนาการ</option><option value="1.4">1.4 พัฒนาประสิทธิภาพการผลิตอาหารปลอดภัย และการใช้ประโยชน์จากอาหาร</option><option value="1.5">1.5 สนับสนุนคนรุ่นใหม่เข้าสู่ภาคเกษตร</option><option value="1.6">1.6 ส่งเสริมการเข้าถึงอาหารในระดับครัวเรือน และชุมชนเมือง/ชนบท</option><option value="1.7">1.7 ปรับปรุงและพัฒนาระบบโลจิสติกส์ด้านสินค้าเกษตรและอาหาร เพื่อรองรับสถานการณ์ความมั่นคงด้านอาหาร ทั้งในภาวะปกติและภาวะวิกฤติ</option><option value="1.8">1.8 วิจัยและพัฒนาเทคโนโลยีและนวัตกรรมตลอดห่วงโซ่อาหาร</option><!-- Add more tactics --></select></div>';
    } else if (strategy === '2') {
        tacticsHTML = '<div class="form-group"><label for="tactic">กลยุทธ์:</label><select id="tactic" name="tactic" required><option value="">เลือกกลยุทธ์</option><option value="2.1">2.1 สร้างมาตรฐานด้านคุณภาพและความปลอดภัยอาหารให้เป็นมาตรฐานเดียวและส่งเสริมการบังคับใช้</option><option value="2.2">2.2 พัฒนาการผลิตสินค้าเกษตรขั้นต้นให้มีคุณภาพสูง ปลอดภัย และคุณค่า ทางโภชนาการเพิ่มขึ้น</option><option value="2.3">2.3  เสริมสร้างความเข้มแข็งภาคการผลิตในระดับชุมชนและท้องถิ่น เพื่อป้องกัน การสูญเสียและเพิ่มมูลค่าให้กับผลผลิต ด้วยคุณภาพระดับสูง</option><option value="2.4">2.4  เสริมสร้างความเข้มแข็งภาคการผลิตในระดับอุตสาหกรรมทุกระดับไปสู่อุตสาหกรรมที่ขับเคลื่อนด้วยเทคโนโลยีและนวัตกรรม</option><option value="2.5">2.5 ส่งเสริมการค้าและการตลาดผลิตภัณฑ์มาตรฐาน ทั้งที่มาจากการผลิตในระดับ ชุมชนและอุตสาหกรรม</option><option value="2.6">2.6 เสริมสร้างความเข็มแข็งในการควบคุมคุณภาพและความปลอดภัยของอาหาร ของประเทศ</option><!-- Add more tactics --></select></div>';
    } else if (strategy === '3') {
        tacticsHTML = '<div class="form-group"><label for="tactic">กลยุทธ์:</label><select id="tactic" name="tactic" required><option value="">เลือกกลยุทธ์</option><option value="3.1">3.1 ส่งเสริมพฤติกรรมการบริโภคที่เหมาะสมและจัดการสภาพแวดล้อมของชุมชน ที่เอื้อต่อการมีพฤติกรรมการบริโภคเพื่อสุขภาวะ</option><option value="3.2">3.2 เสริมสร้างเครือข่ายความร่วมมือการดำเนินงานและการวิจัยสหสาขา</option><option value="3.3">3.3 สนับสนุนการพัฒนาจัดการองค์ความรู้ และสร้างกระบวนการเรียนรู้ด้านอาหาร ศึกษาอย่างต่อเนื่อง</option><option value="3.4">3.4 ส่งเสริมให้ผู้ผลิตอาหารและผู้ประกอบอาหารมีความรู้และทักษะด้านอาหาร อย่างเหมาะสม</option><option value="3.5">3.5 บูรณาการระบบข้อมูลด้านอาหารและโภชนาการเพื่อเพิ่มประสิทธิภาพการจัดการ ข้อมูลสารสนเทศเพื่อการตัดสินใจเชิงนโยบาย</option><!-- Add more tactics --></select></div>';
    } else if (strategy === '4') {
        tacticsHTML = '<div class="form-group"><label for="tactic">กลยุทธ์:</label><select id="tactic" name="tactic" required><option value="">เลือกกลยุทธ์</option><option value="4.1">4.1 ปรับปรุงและเสริมความเข้มแข็งโครงสร้างองค์กรในห่วงโซ่อาหาร</option><option value="4.2">4.2 พัฒนาฐานข้อมูลและการจัดการ</option><!-- Add more tactics --></select></div>';
    }
    
    tactics.innerHTML = tacticsHTML;
});

document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
});
