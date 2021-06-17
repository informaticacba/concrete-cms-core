<?php defined('C5_EXECUTE') or die("Access Denied."); ?>


<?php
if ($fID > 0) {
    $fo = File::getByID($fID);
    if (!is_object($fo)) {
        unset($fo);
    }
}

if ($awardImageID) {
    $awardImage = File::getByID($awardImageID);
    if (!$awardImage) {
        unset($awardImage);
    }
}
?>

<div class="form-group">
    <?php echo $form->label('fID', t('Picture'), ['class' => 'form-label']);?>
    <?php
    $al = Loader::helper('concrete/asset_library');
    echo $al->file('ccm-b-file', 'fID', t('Choose File'), $fo);
    ?>
</div>

<div class="form-group">
    <?php echo $form->label('name', t('Name'), ['class' => 'form-label']);?>
    <?php echo $form->text('name', $name)?>
</div>

<div class="form-group">
    <?php echo $form->label('position', t('Position'), ['class' => 'form-label']);?>
    <?php echo $form->text('position', $position)?>
</div>

<div class="form-group">
    <?php echo $form->label('company', t('Company'), ['class' => 'form-label']);?>
    <?php echo $form->text('company', $company)?>
</div>

<div class="form-group">
    <?php echo $form->label('companyURL', t('Company URL'), ['class' => 'form-label']);?>
    <?php echo $form->text('companyURL', $companyURL)?>
</div>

<div class="form-group">
    <?php echo $form->label('paragraph', t('Bio/Quote'), ['class' => 'form-label']) ?>
    <?php echo $form->textarea('paragraph', $paragraph, array('rows' => 5))?>
</div>

<div class="form-group">
    <?php echo $form->label('awardImageID', t('Award Image')) ?>
    <?= $al->image('awardImageID', 'awardImageID', t('Choose File'), $awardImage); ?>

</div>
